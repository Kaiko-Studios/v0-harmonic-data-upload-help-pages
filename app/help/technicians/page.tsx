import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, CheckCircle2, AlertCircle, Info, Calendar, Clock, Users2 } from "lucide-react"

export default function TechniciansHelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3 text-balance">
            Technician Management Data Upload Guide
          </h1>
          <p className="text-lg text-slate-600 text-pretty">
            Learn how to configure technician profiles and scheduling to enable automated task assignment, workload
            balancing, and seamless communication across your maintenance team.
          </p>
        </div>

        {/* Video Placeholder */}
        <Card className="mb-8 overflow-hidden border-orange-200 bg-gradient-to-br from-white to-orange-50/50">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-20 h-20 text-orange-400 mx-auto mb-4" />
                <p className="text-white text-lg font-medium">Video Tutorial Coming Soon</p>
                <p className="text-slate-300 text-sm mt-2">Complete walkthrough of technician setup and scheduling</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Is Technician Management */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Info className="w-6 h-6 text-orange-500" />
              What Is Technician Management?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Technician Management in Harmonic AI enables you to maintain complete profiles of your maintenance team,
              track their skills and certifications, and automate work order assignments based on availability,
              expertise, and location.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Why Accurate Technician Data Matters</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Automatically match jobs to the right technician based on skill set, availability, and proximity
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Balance workloads to prevent over- or under-utilization across your team</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Enable direct communication with tenants and supervisors through built-in messaging</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Provide secure system access for technicians to view, accept, and complete work orders in real time
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Track performance and compliance for analytics, reporting, and quality assurance</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Required Fields */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle2 className="w-6 h-6 text-orange-500" />
              Required Fields
            </CardTitle>
            <CardDescription>These fields must be completed for each technician</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <FieldItem
                name="Technician ID"
                technical="id"
                description="Unique identifier for the technician record (auto-generated if blank)"
                required
              />
              <FieldItem
                name="Full Name"
                technical="name"
                description="Technician's full name as displayed in the system"
                required
              />
              <FieldItem
                name="Employee Number"
                technical="employeeNo"
                description="Internal or HR reference number for employee tracking"
                required
              />
              <FieldItem
                name="Address"
                technical="address"
                description="Technician's home or work base address (used for route optimization)"
                required
              />
              <FieldItem
                name="Email"
                technical="email"
                description="Official email used for login, notifications, and communication"
                required
              />
              <FieldItem
                name="Phone"
                technical="phone"
                description="Primary contact number for scheduling and real-time updates"
                required
              />
              <FieldItem
                name="Status"
                technical="status"
                description="Current employment or system status (e.g., Active, On Leave, Inactive)"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Skills Field */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="w-6 h-6 text-orange-500" />
              Skills & Specializations
            </CardTitle>
            <CardDescription>Critical for automated task assignment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-orange-400 pl-4 py-2">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-slate-900">Skills</h4>
                <Badge variant="secondary" className="text-xs">
                  Highly Recommended
                </Badge>
              </div>
              <p className="text-xs text-slate-500 mb-2 font-mono">skills</p>
              <p className="text-sm text-slate-700 mb-3">
                Technician's primary trade or specialization — used by Harmonic AI to automatically assign tasks based
                on skill and certification.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mt-3">
                <h5 className="text-sm font-semibold text-slate-900 mb-2">Available Skill Categories:</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Appliance Repair
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Carpentry
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Electrical
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Elevator/Escalator
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Fire Safety
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    General Maintenance
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    HVAC
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Landscaping & Irrigation
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Masonry
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Multi-Skill
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Networking/IT Support
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Painting
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Pest Control
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Plumbing
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Security Systems
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Welding
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Other
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scheduling Features */}
        <Card className="mb-8 border-orange-200 bg-gradient-to-br from-white to-orange-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calendar className="w-6 h-6 text-orange-500" />
              Advanced Scheduling Features
            </CardTitle>
            <CardDescription>Powerful tools to manage technician availability and workload</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Harmonic AI provides sophisticated scheduling capabilities that go beyond basic availability tracking.
              These features ensure optimal resource allocation and prevent scheduling conflicts.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <SchedulingFeatureCard
                icon={<Users2 className="w-5 h-5 text-orange-600" />}
                title="Multiple Schedule Templates"
                description="Create different schedule templates (e.g., Day Shift, Night Shift, Weekend Rotation) and assign them to individual or multiple technicians"
                benefits={["Reusable templates save time", "Consistent scheduling patterns", "Easy bulk assignment"]}
              />

              <SchedulingFeatureCard
                icon={<Calendar className="w-5 h-5 text-orange-600" />}
                title="Holiday & Vacation Blocks"
                description="Mark specific dates or date ranges when technicians are unavailable due to holidays, vacation, or personal time off"
                benefits={[
                  "Prevents assignment conflicts",
                  "Automatic workload redistribution",
                  "PTO tracking integration",
                ]}
              />

              <SchedulingFeatureCard
                icon={<Clock className="w-5 h-5 text-orange-600" />}
                title="Variable Daily Schedules"
                description="Set different working hours for each day of the week to accommodate flexible schedules and part-time staff"
                benefits={[
                  "Supports flexible work arrangements",
                  "Accurate availability tracking",
                  "Better work-life balance",
                ]}
              />

              <SchedulingFeatureCard
                icon={<CheckCircle2 className="w-5 h-5 text-orange-600" />}
                title="Recurring Patterns"
                description="Define repeating schedule patterns (e.g., every other weekend, rotating shifts) that automatically apply over time"
                benefits={["Reduces manual scheduling", "Ensures fair rotation", "Long-term planning"]}
              />
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-orange-600" />
                Additional Scheduling Capabilities
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>On-Call Rotations:</strong> Designate technicians for emergency after-hours support
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Overtime Tracking:</strong> Monitor and balance overtime hours across your team
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Geographic Zones:</strong> Assign technicians to specific service areas for efficient
                    routing
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Capacity Limits:</strong> Set maximum daily/weekly work orders per technician
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Break Scheduling:</strong> Account for lunch breaks and rest periods in availability
                    calculations
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Team Coordination:</strong> Assign multiple technicians to large jobs requiring
                    collaboration
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl">Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  <strong>Always specify skills:</strong> This enables the AI to automatically match work orders to
                  qualified technicians
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  <strong>Keep addresses current:</strong> Accurate home/base addresses improve route optimization and
                  reduce travel time
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  <strong>Update status regularly:</strong> Mark technicians as "On Leave" or "Inactive" to prevent
                  incorrect assignments
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  <strong>Set up schedules in advance:</strong> Configure holiday blocks and vacation time early to
                  ensure smooth operations
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  <strong>Use schedule templates:</strong> Create reusable templates for common shift patterns to save
                  time
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  <strong>Balance workloads:</strong> Monitor assignment distribution to prevent burnout and ensure fair
                  work allocation
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function FieldItem({
  name,
  technical,
  description,
  required,
}: {
  name: string
  technical: string
  description: string
  required?: boolean
}) {
  return (
    <div className="border-l-4 border-orange-400 pl-4 py-2">
      <div className="flex items-center gap-2 mb-1">
        <h4 className="font-semibold text-slate-900">{name}</h4>
        {required && (
          <Badge variant="destructive" className="text-xs">
            Required
          </Badge>
        )}
      </div>
      <p className="text-xs text-slate-500 mb-1 font-mono">{technical}</p>
      <p className="text-sm text-slate-700">{description}</p>
    </div>
  )
}

function SchedulingFeatureCard({
  icon,
  title,
  description,
  benefits,
}: {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">{icon}</div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
          <p className="text-sm text-slate-700">{description}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-600 mb-2">Key Benefits:</p>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
              <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
