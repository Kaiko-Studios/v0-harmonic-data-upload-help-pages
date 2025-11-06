import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, CheckCircle2, AlertCircle, Info } from "lucide-react"

export default function SharedFacilitiesHelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3 text-balance">Shared Facilities Data Upload Guide</h1>
          <p className="text-lg text-slate-600 text-pretty">
            Learn how to properly configure shared facilities to enable seamless booking management, access control, and
            usage analytics across your properties.
          </p>
        </div>

        {/* Video Placeholder */}
        <Card className="mb-8 overflow-hidden border-orange-200 bg-gradient-to-br from-white to-orange-50/50">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-20 h-20 text-orange-400 mx-auto mb-4" />
                <p className="text-white text-lg font-medium">Video Tutorial Coming Soon</p>
                <p className="text-slate-300 text-sm mt-2">Complete walkthrough of shared facilities setup</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Are Shared Facilities */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Info className="w-6 h-6 text-orange-500" />
              What Are Shared Facilities?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Shared Facilities represent any physical amenity that can be accessed by multiple tenants, units, or
              properties. Examples include pools, gyms, BBQ areas, rooftops, meeting rooms, playgrounds, and common
              spaces.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Why Accurate Data Matters</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Proper facility data enables the system to correctly manage bookings, enforce access permissions,
                schedule maintenance, track usage analytics, and provide a seamless experience for your tenants.
              </p>
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
            <CardDescription>These fields must be completed for each facility</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <FieldItem
                name="Facility Name"
                technical="name"
                description="The display name of the facility (e.g., East Pool, Skyline Gym)"
                required
              />
              <FieldItem
                name="Facility Type"
                technical="shareFacilityType"
                description="The facility category: pool, gym, playground, rooftop, BBQ area, dog run, sports court, meeting room, mail room, lobby, courtyard"
                required
              />
              <FieldItem
                name="Address / Physical Location"
                technical="address"
                description="Street address, floor level, or geofence coordinates"
                required
              />
              <FieldItem
                name="Bookable"
                technical="bookable"
                description="Yes/No field indicating whether tenants can book this facility"
                required
              />
              <FieldItem
                name="Community ID"
                technical="communityId"
                description="Identifier for the community or complex. Pull this number from your Community setup file"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Optional But Recommended Fields */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="w-6 h-6 text-orange-500" />
              Optional Fields (Enhance Functionality)
            </CardTitle>
            <CardDescription>Add these fields to unlock advanced features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <OptionalFieldCard
                name="Max Capacity"
                technical="maxCapacity"
                description="Total maximum occupancy; may include per-zone limits"
                benefit="Enables automatic capacity management"
              />
              <OptionalFieldCard
                name="Properties"
                technical="properties"
                description="List property IDs that share this facility"
                benefit="Enables tiered access control (e.g., VIP vs Standard)"
              />
              <OptionalFieldCard
                name="Access Points"
                technical="accessPoint"
                description="Associated doors, gates, or turnstiles (device IDs)"
                benefit="Integrates with physical access control systems"
              />
              <OptionalFieldCard
                name="Blackout Dates"
                technical="blackoutDates"
                description="Dates when facility is unavailable"
                benefit="Prevents bookings during maintenance or holidays"
              />
              <OptionalFieldCard
                name="Age Restrictions"
                technical="ageRestrictions"
                description="e.g., 16+ gym, 12+ pool with adult"
                benefit="Enforces safety and compliance rules"
              />
              <OptionalFieldCard
                name="Booking Quotas"
                technical="bookingQuotas"
                description="Max bookings per tenant/unit per day or week"
                benefit="Ensures fair access for all residents"
              />
              <OptionalFieldCard
                name="Fee Schedule"
                technical="feeSchedule"
                description="Per booking, per guest, or deposit amount"
                benefit="Automates billing and revenue tracking"
              />
              <OptionalFieldCard
                name="Zones"
                technical="zone"
                description="Descriptive areas within facility (e.g., Lap Lanes, Free Weights)"
                benefit="Enables granular booking and capacity management"
              />
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
                <span className="text-slate-700">Use clear, descriptive names that tenants will easily recognize</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Link facilities to the correct Community ID to ensure proper access control
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Set booking quotas to prevent monopolization of popular facilities
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Include blackout dates for scheduled maintenance to avoid booking conflicts
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Define age restrictions and supervision requirements for safety compliance
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

function OptionalFieldCard({
  name,
  technical,
  description,
  benefit,
}: {
  name: string
  technical: string
  description: string
  benefit: string
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <h4 className="font-semibold text-slate-900 mb-1">{name}</h4>
      <p className="text-xs text-slate-500 mb-2 font-mono">{technical}</p>
      <p className="text-sm text-slate-700 mb-2">{description}</p>
      <div className="flex items-start gap-2 mt-3 pt-3 border-t border-slate-200">
        <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-600 italic">{benefit}</p>
      </div>
    </div>
  )
}
