"use client"

import { useState, useEffect, useMemo } from "react"
import { questions, Question } from "@/lib/qcm-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle, RotateCcw, Trophy, BookOpen, AlertTriangle, Lightbulb, Filter, Shuffle, ArrowRight } from "lucide-react"

type QuizMode = "menu" | "quiz" | "results"
type FilterType = "all" | "facile" | "intermédiaire" | "difficile" | "piège"

const categories = [...new Set(questions.map(q => q.category))]

export function QCMQuiz() {
  const [mode, setMode] = useState<QuizMode>("menu")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState<Record<number, number[]>>({})
  const [difficultyFilter, setDifficultyFilter] = useState<FilterType>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [quizLength, setQuizLength] = useState<number>(20)

  const filteredQuestions = useMemo(() => {
    let filtered = questions
    if (difficultyFilter !== "all") {
      filtered = filtered.filter(q => q.difficulty === difficultyFilter)
    }
    if (categoryFilter !== "all") {
      filtered = filtered.filter(q => q.category === categoryFilter)
    }
    return filtered
  }, [difficultyFilter, categoryFilter])

  const startQuiz = (shuffle: boolean = true) => {
    let questionsToUse = [...filteredQuestions]
    if (shuffle) {
      questionsToUse = questionsToUse.sort(() => Math.random() - 0.5)
    }
    questionsToUse = questionsToUse.slice(0, quizLength)
    setShuffledQuestions(questionsToUse)
    setCurrentIndex(0)
    setSelectedAnswers([])
    setShowExplanation(false)
    setAnswers({})
    setMode("quiz")
  }

  const currentQuestion = shuffledQuestions[currentIndex]

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return
    setSelectedAnswers(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index)
      }
      return [...prev, index]
    })
  }

  const validateAnswer = () => {
    setAnswers(prev => ({ ...prev, [currentIndex]: selectedAnswers }))
    setShowExplanation(true)
  }

  const nextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswers([])
      setShowExplanation(false)
    } else {
      setMode("results")
    }
  }

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      setSelectedAnswers(answers[currentIndex - 1] || [])
      setShowExplanation(!!answers[currentIndex - 1])
    }
  }

  const isCorrect = (questionIndex: number) => {
    const question = shuffledQuestions[questionIndex]
    const userAnswers = answers[questionIndex] || []
    if (userAnswers.length !== question.correctAnswers.length) return false
    return userAnswers.every(a => question.correctAnswers.includes(a)) &&
           question.correctAnswers.every(a => userAnswers.includes(a))
  }

  const calculateScore = () => {
    let correct = 0
    shuffledQuestions.forEach((_, index) => {
      if (isCorrect(index)) correct++
    })
    return correct
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "facile": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
      case "intermédiaire": return "bg-amber-500/10 text-amber-600 border-amber-500/20"
      case "difficile": return "bg-red-500/10 text-red-600 border-red-500/20"
      case "piège": return "bg-purple-500/10 text-purple-600 border-purple-500/20"
      default: return "bg-muted text-muted-foreground"
    }
  }

  if (mode === "menu") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">QCM Coagulation Plasmatique</h1>
            <p className="text-slate-600">Testez vos connaissances sur la coagulation - {questions.length} questions disponibles</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Options du Quiz
              </CardTitle>
              <CardDescription>Personnalisez votre session de revision</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Nombre de questions</label>
                <div className="flex flex-wrap gap-2">
                  {[10, 20, 30, 50, 100, filteredQuestions.length].map(num => (
                    <Button
                      key={num}
                      variant={quizLength === num ? "default" : "outline"}
                      size="sm"
                      onClick={() => setQuizLength(Math.min(num, filteredQuestions.length))}
                      disabled={num > filteredQuestions.length}
                    >
                      {num === filteredQuestions.length ? "Toutes" : num}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Difficulte</label>
                <div className="flex flex-wrap gap-2">
                  {(["all", "facile", "intermédiaire", "difficile", "piège"] as FilterType[]).map(diff => (
                    <Button
                      key={diff}
                      variant={difficultyFilter === diff ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDifficultyFilter(diff)}
                    >
                      {diff === "all" ? "Toutes" : diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Categorie</label>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={categoryFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCategoryFilter("all")}
                  >
                    Toutes
                  </Button>
                  {categories.map(cat => (
                    <Button
                      key={cat}
                      variant={categoryFilter === cat ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCategoryFilter(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-slate-600 mb-4">
                  {filteredQuestions.length} questions disponibles avec ces filtres
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 gap-2" 
                    size="lg"
                    onClick={() => startQuiz(true)}
                    disabled={filteredQuestions.length === 0}
                  >
                    <Shuffle className="w-4 h-4" />
                    Commencer (ordre aleatoire)
                  </Button>
                  <Button 
                    className="flex-1 gap-2" 
                    variant="outline"
                    size="lg"
                    onClick={() => startQuiz(false)}
                    disabled={filteredQuestions.length === 0}
                  >
                    <ArrowRight className="w-4 h-4" />
                    Commencer (ordre normal)
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistiques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">
                    {questions.filter(q => q.difficulty === "facile").length}
                  </div>
                  <div className="text-sm text-slate-600">Faciles</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">
                    {questions.filter(q => q.difficulty === "intermédiaire").length}
                  </div>
                  <div className="text-sm text-slate-600">Intermediaires</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">
                    {questions.filter(q => q.difficulty === "difficile").length}
                  </div>
                  <div className="text-sm text-slate-600">Difficiles</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {questions.filter(q => q.difficulty === "piège").length}
                  </div>
                  <div className="text-sm text-slate-600">Pieges</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (mode === "results") {
    const score = calculateScore()
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4">
                <Trophy className={cn(
                  "w-10 h-10",
                  percentage >= 80 ? "text-yellow-500" : percentage >= 60 ? "text-slate-400" : "text-amber-700"
                )} />
              </div>
              <CardTitle className="text-2xl">Resultats du Quiz</CardTitle>
              <CardDescription>Vous avez termine le quiz !</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary mb-2">{score}/{shuffledQuestions.length}</div>
                <div className="text-xl text-slate-600">{percentage}% de reussite</div>
                <Progress value={percentage} className="mt-4 h-3" />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">{score}</div>
                  <div className="text-sm text-slate-600">Correctes</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{shuffledQuestions.length - score}</div>
                  <div className="text-sm text-slate-600">Incorrectes</div>
                </div>
                <div className="text-center p-4 bg-slate-100 rounded-lg">
                  <div className="text-2xl font-bold text-slate-600">{shuffledQuestions.length}</div>
                  <div className="text-sm text-slate-600">Total</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900">Resume des questions</h3>
                <div className="max-h-96 overflow-y-auto space-y-2 pr-2">
                  {shuffledQuestions.map((q, index) => (
                    <div 
                      key={q.id}
                      className={cn(
                        "p-3 rounded-lg border flex items-start gap-3",
                        isCorrect(index) ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"
                      )}
                    >
                      {isCorrect(index) ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-700 line-clamp-2">{q.question}</p>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className={cn("text-xs", getDifficultyColor(q.difficulty))}>
                            {q.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {q.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button variant="outline" className="flex-1 gap-2" onClick={() => setMode("menu")}>
                <RotateCcw className="w-4 h-4" />
                Nouveau Quiz
              </Button>
              <Button className="flex-1 gap-2" onClick={() => {
                setCurrentIndex(0)
                setSelectedAnswers(answers[0] || [])
                setShowExplanation(!!answers[0])
                setMode("quiz")
              }}>
                <BookOpen className="w-4 h-4" />
                Revoir les questions
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">
              Question {currentIndex + 1} / {shuffledQuestions.length}
            </span>
            <div className="flex gap-2">
              <Badge variant="outline" className={cn(getDifficultyColor(currentQuestion?.difficulty || "facile"))}>
                {currentQuestion?.difficulty}
              </Badge>
              <Badge variant="outline">{currentQuestion?.category}</Badge>
            </div>
          </div>
          <Progress value={((currentIndex + 1) / shuffledQuestions.length) * 100} className="h-2" />
        </div>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">{currentQuestion?.question}</CardTitle>
            {currentQuestion?.correctAnswers && currentQuestion.correctAnswers.length > 1 && (
              <CardDescription className="flex items-center gap-1 text-amber-600">
                <AlertTriangle className="w-4 h-4" />
                Plusieurs reponses possibles
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion?.options.map((option, index) => {
              const isSelected = selectedAnswers.includes(index)
              const isCorrectAnswer = currentQuestion.correctAnswers.includes(index)
              const showResult = showExplanation
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={cn(
                    "w-full p-4 rounded-lg border-2 text-left transition-all duration-200",
                    "flex items-start gap-3",
                    !showResult && isSelected && "border-primary bg-primary/5",
                    !showResult && !isSelected && "border-slate-200 hover:border-slate-300 hover:bg-slate-50",
                    showResult && isCorrectAnswer && "border-emerald-500 bg-emerald-50",
                    showResult && isSelected && !isCorrectAnswer && "border-red-500 bg-red-50",
                    showResult && "cursor-default"
                  )}
                >
                  <span className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                    !showResult && isSelected && "bg-primary text-primary-foreground",
                    !showResult && !isSelected && "bg-slate-100 text-slate-600",
                    showResult && isCorrectAnswer && "bg-emerald-500 text-white",
                    showResult && isSelected && !isCorrectAnswer && "bg-red-500 text-white"
                  )}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 pt-0.5">{option}</span>
                  {showResult && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  )}
                  {showResult && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                </button>
              )
            })}
          </CardContent>

          {showExplanation && currentQuestion && (
            <CardFooter className="flex-col items-stretch gap-4 border-t bg-slate-50/50 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Explication</h4>
                  <p className="text-sm text-slate-600">{currentQuestion.explanation}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Point cle a retenir</h4>
                  <p className="text-sm text-slate-600 font-medium">{currentQuestion.keyPoint}</p>
                </div>
              </div>

              {currentQuestion.trap && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Piege a eviter</h4>
                    <p className="text-sm text-slate-600">{currentQuestion.trap}</p>
                  </div>
                </div>
              )}
            </CardFooter>
          )}
        </Card>

        <div className="flex items-center justify-between gap-3">
          <Button
            variant="outline"
            onClick={previousQuestion}
            disabled={currentIndex === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Precedent
          </Button>

          <Button
            variant="outline"
            onClick={() => setMode("menu")}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Menu
          </Button>

          {!showExplanation ? (
            <Button
              onClick={validateAnswer}
              disabled={selectedAnswers.length === 0}
              className="gap-2"
            >
              Valider
              <CheckCircle2 className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={nextQuestion} className="gap-2">
              {currentIndex === shuffledQuestions.length - 1 ? "Resultats" : "Suivant"}
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
