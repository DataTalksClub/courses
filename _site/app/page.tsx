"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Clock, Star } from "lucide-react"

export default function CourseLanding() {
  const [email, setEmail] = useState("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800">DataMaster.Course</div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("description")}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Description
              </button>
              <button
                onClick={() => scrollToSection("syllabus")}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Syllabus
              </button>
              <button
                onClick={() => scrollToSection("instructor")}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Instructor
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Pricing
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">New Course Available</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Master Data Science
            <br />
            <span className="text-gray-600">From Zero to Hero</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A comprehensive 12-week course that takes you from beginner to advanced data scientist. Learn Python,
            machine learning, and real-world project implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => scrollToSection("pricing")}
            >
              Enroll Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 px-8 py-3"
              onClick={() => scrollToSection("description")}
            >
              Learn More
            </Button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              2,500+ students
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              12 weeks
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2" />
              4.9/5 rating
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section id="description" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Python programming fundamentals and advanced concepts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Data manipulation with Pandas and NumPy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Statistical analysis and hypothesis testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Data visualization with Matplotlib and Seaborn</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Topics</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Machine learning algorithms and implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Deep learning with TensorFlow and Keras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Real-world project development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Portfolio building and career guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Course Syllabus</h2>
          <div className="space-y-6">
            {[
              {
                week: 1,
                title: "Python Fundamentals",
                topics: ["Variables & Data Types", "Control Structures", "Functions"],
              },
              {
                week: 2,
                title: "Data Structures & Libraries",
                topics: ["Lists, Dictionaries, Sets", "NumPy Basics", "Pandas Introduction"],
              },
              {
                week: 3,
                title: "Data Cleaning & Preprocessing",
                topics: ["Handling Missing Data", "Data Transformation", "Feature Engineering"],
              },
              {
                week: 4,
                title: "Exploratory Data Analysis",
                topics: ["Statistical Summaries", "Data Visualization", "Pattern Recognition"],
              },
              {
                week: 5,
                title: "Statistical Analysis",
                topics: ["Descriptive Statistics", "Hypothesis Testing", "Correlation Analysis"],
              },
              {
                week: 6,
                title: "Machine Learning Basics",
                topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
              },
              {
                week: 7,
                title: "Regression Analysis",
                topics: ["Linear Regression", "Logistic Regression", "Regularization"],
              },
              { week: 8, title: "Classification Algorithms", topics: ["Decision Trees", "Random Forest", "SVM"] },
              { week: 9, title: "Clustering & Dimensionality", topics: ["K-Means", "Hierarchical Clustering", "PCA"] },
              {
                week: 10,
                title: "Deep Learning Introduction",
                topics: ["Neural Networks", "TensorFlow Basics", "Keras Implementation"],
              },
              { week: 11, title: "Advanced Deep Learning", topics: ["CNNs", "RNNs", "Transfer Learning"] },
              { week: 12, title: "Capstone Project", topics: ["Project Planning", "Implementation", "Presentation"] },
            ].map((module) => (
              <Card key={module.week} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Week {module.week}: {module.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge className="bg-gray-100 text-gray-700">Week {module.week}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Meet Your Instructor</h2>
          <Card className="border border-gray-200">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  DS
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-blue-600 mb-4">Senior Data Scientist at TechCorp</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    With over 8 years of experience in data science and machine learning, Dr. Johnson has worked with
                    Fortune 500 companies to implement AI solutions. She holds a PhD in Computer Science from MIT and
                    has published 25+ research papers in top-tier conferences.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Badge className="bg-blue-50 text-blue-700">PhD Computer Science</Badge>
                    <Badge className="bg-blue-50 text-blue-700">8+ Years Experience</Badge>
                    <Badge className="bg-blue-50 text-blue-700">25+ Publications</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Data Analyst at Google",
                content:
                  "This course completely transformed my career. The hands-on projects and clear explanations made complex concepts easy to understand.",
                rating: 5,
              },
              {
                name: "Maria Rodriguez",
                role: "ML Engineer at Spotify",
                content:
                  "Dr. Johnson's teaching style is exceptional. I went from knowing nothing about ML to landing my dream job in just 6 months.",
                rating: 5,
              },
              {
                name: "David Kim",
                role: "Data Scientist at Uber",
                content:
                  "The capstone project was incredibly valuable. It gave me real portfolio pieces that impressed employers during interviews.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Do I need prior programming experience?",
                answer:
                  "No! This course is designed for complete beginners. We start with Python basics and gradually build up to advanced topics.",
              },
              {
                question: "How much time should I dedicate per week?",
                answer:
                  "We recommend 8-10 hours per week, including video lectures, assignments, and project work. The course is flexible to accommodate different schedules.",
              },
              {
                question: "What software/tools do I need?",
                answer:
                  "All you need is a computer with internet access. We'll guide you through installing Python, Jupyter notebooks, and all necessary libraries.",
              },
              {
                question: "Is there a certificate upon completion?",
                answer:
                  "Yes! You'll receive a verified certificate of completion that you can add to your LinkedIn profile and resume.",
              },
              {
                question: "What if I fall behind or need extra help?",
                answer:
                  "We have a dedicated Slack community, weekly office hours, and 1-on-1 mentoring sessions available for students who need additional support.",
              },
              {
                question: "Is there a money-back guarantee?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not satisfied with the course, we'll refund your payment in full.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of students who have transformed their careers with data science
          </p>

          <Card className="max-w-md mx-auto border-2 border-blue-200 bg-blue-50/30">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Complete Course</h3>
              </div>

              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">12 weeks of comprehensive content</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Hands-on projects and assignments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Slack community access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Certificate of completion</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Lifetime access to materials</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">30-day money-back guarantee</span>
                </li>
              </ul>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">Enroll Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for course updates, data science tips, and exclusive content.
          </p>

          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-gray-300"
              required
            />
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-8">
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">{"You'll get updates within 24 hours"}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">DataMaster.Course</div>
          <p className="text-gray-400 mb-6">Empowering the next generation of data scientists</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
