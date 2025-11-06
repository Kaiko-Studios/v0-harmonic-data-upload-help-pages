import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, Wrench, ArrowRight, UserCog } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Harmonic AI</h1>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-3 text-balance">Data Upload Help Center</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            Learn how to properly configure your data for optimal system performance. Choose a component below to get
            started.
          </p>
        </div>

        {/* Help Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/help/shared-facilities">
            <Card className="border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Shared Facilities</CardTitle>
                <CardDescription>Configure pools, gyms, meeting rooms, and other shared amenities</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between group">
                  View Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/help/properties">
            <Card className="border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Properties & Communities</CardTitle>
                <CardDescription>Set up your property portfolio and community groupings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between group">
                  View Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/help/assets">
            <Card className="border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Assets</CardTitle>
                <CardDescription>Track HVAC, elevators, and other physical equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between group">
                  View Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/help/technicians">
            <Card className="border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <UserCog className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Technicians</CardTitle>
                <CardDescription>Manage your maintenance team and scheduling</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between group">
                  View Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Tips */}
        <Card className="border-orange-200 bg-gradient-to-br from-white to-orange-50/50">
          <CardHeader>
            <CardTitle className="text-2xl">Quick Tips for Success</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Start with Communities</h4>
                  <p className="text-sm text-slate-600">
                    Create your community groupings first, then link properties and facilities to them
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Use Simple IDs</h4>
                  <p className="text-sm text-slate-600">
                    Stick to simple numeric IDs (1, 2, 3...) for easier reference and management
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Link Everything</h4>
                  <p className="text-sm text-slate-600">
                    Connect assets to properties/facilities to enable automatic maintenance tracking
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Complete Optional Fields</h4>
                  <p className="text-sm text-slate-600">
                    Add optional data to unlock advanced features like warranty tracking and IoT monitoring
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
