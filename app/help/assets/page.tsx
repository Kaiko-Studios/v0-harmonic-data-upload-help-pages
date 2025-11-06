import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, CheckCircle2, AlertCircle, Info, Wrench, Zap } from "lucide-react"

export default function AssetsHelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3 text-balance">Asset Data Upload Guide</h1>
          <p className="text-lg text-slate-600 text-pretty">
            Configure your physical assets to enable automated preventive maintenance, warranty tracking, compliance
            inspections, and IoT monitoring across your entire portfolio.
          </p>
        </div>

        {/* Video Placeholder */}
        <Card className="mb-8 overflow-hidden border-orange-200 bg-gradient-to-br from-white to-orange-50/50">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-20 h-20 text-orange-400 mx-auto mb-4" />
                <p className="text-white text-lg font-medium">Video Tutorial Coming Soon</p>
                <p className="text-slate-300 text-sm mt-2">Complete walkthrough of asset management setup</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Are Assets */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Info className="w-6 h-6 text-orange-500" />
              What Are Assets?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Assets are physical equipment and systems tracked within your properties or shared facilities. Examples
              include HVAC units, elevators, security cameras, smart sensors, plumbing fixtures, gates, and any other
              equipment requiring maintenance or monitoring.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-slate-900">Why Track Assets?</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Automate preventive maintenance schedules</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Track warranty coverage and expiration</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Ensure compliance with safety inspections</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Monitor IoT-enabled equipment in real-time</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-slate-600" />
                  <h4 className="font-semibold text-slate-900">Automation Benefits</h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>Auto-assign technicians by skill set</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>Generate maintenance reports automatically</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>Link maintenance requests to specific assets</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>Track asset lifecycle and replacement needs</span>
                  </li>
                </ul>
              </div>
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
            <CardDescription>Essential information for each asset</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FieldItem
              name="Asset Name"
              technical="name"
              description="Display name of the asset (e.g., Main Lobby HVAC Unit, North Elevator 2)"
              required
            />
            <FieldItem
              name="Asset ID"
              technical="id"
              description="Unique identifier used internally or within your CMMS"
              required
            />
            <FieldItem
              name="Asset Type"
              technical="assetType"
              description="Classification: HVAC, Elevator, Plumbing Fixture, Security Camera, Gate, etc. Used for automation and reporting"
              required
            />
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Location Requirement
              </h4>
              <p className="text-sm text-slate-700 mb-3">
                Each asset must be linked to either a Property OR a Shared Facility (at least one is required):
              </p>
              <div className="space-y-3">
                <FieldItem
                  name="Associated Property"
                  technical="property"
                  description="Link to the parent property. Recommended for property-specific assets so maintenance requests can be automatically tied to impacted assets"
                  required={false}
                />
                <FieldItem
                  name="Associated Shared Facility"
                  technical="shareFacility"
                  description="Link to the parent shared facility. Recommended for facility assets so maintenance requests can be automatically tracked"
                  required={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Asset Type Importance */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Wrench className="w-6 h-6 text-orange-500" />
              Why Asset Type Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              The Asset Type field is critical for automation and should be chosen carefully:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Automatic Technician Assignment</h4>
                <p className="text-sm text-slate-700">
                  The system uses asset type to automatically assign the right technician based on their skill set
                  (e.g., HVAC specialists for HVAC units, electricians for electrical systems).
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Business Reporting</h4>
                <p className="text-sm text-slate-700">
                  Asset types enable classification of maintenance requests for business intelligence, cost tracking,
                  and performance analytics across your portfolio.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Optional But Valuable Fields */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="w-6 h-6 text-orange-500" />
              Optional Fields That Add Value
            </CardTitle>
            <CardDescription>Enhance asset management with these additional fields</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <OptionalFieldCard
                name="Manufacturer & Model"
                technical="manufacturer, model"
                description="Brand name and model number"
                benefit="Simplifies parts ordering and warranty claims"
              />
              <OptionalFieldCard
                name="Serial Number"
                technical="serialNumber"
                description="Manufacturer serial number"
                benefit="Essential for warranty and compliance tracking"
              />
              <OptionalFieldCard
                name="Warranty Dates"
                technical="warrantyStartDate, warrantyEndDate"
                description="Coverage period for warranty"
                benefit="Automates warranty expiration alerts"
              />
              <OptionalFieldCard
                name="Purchase Information"
                technical="purchaseDate, purchasePrice, vendor"
                description="Acquisition details and supplier info"
                benefit="Tracks asset value and vendor relationships"
              />
              <OptionalFieldCard
                name="Current Status"
                technical="status"
                description="Active, In Repair, Decommissioned, or In Storage"
                benefit="Provides real-time asset availability"
              />
              <OptionalFieldCard
                name="Condition Rating"
                technical="condition"
                description="New, Good, Fair, or Poor"
                benefit="Helps prioritize replacement decisions"
              />
              <OptionalFieldCard
                name="IoT Capability"
                technical="smartDeviceCapability, networkDetail"
                description="Smart device status and connection details"
                benefit="Enables real-time monitoring and alerts"
              />
              <OptionalFieldCard
                name="Compliance Certificates"
                technical="certificateRequirements, certificateRenewalDate"
                description="Required certifications and renewal dates"
                benefit="Ensures regulatory compliance"
              />
              <OptionalFieldCard
                name="Asset Documentation"
                technical="assetMedias, assetManual"
                description="Photos, videos, and technical manuals"
                benefit="Quick reference for maintenance teams"
              />
              <OptionalFieldCard
                name="Priority Level"
                technical="priorityLevel"
                description="Critical, Essential, or Non-Essential"
                benefit="Determines SLA response priorities"
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
                <span className="text-slate-700">
                  Use consistent asset naming conventions (e.g., Location + Type + Number)
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Always specify accurate asset types for proper technician assignment
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Link assets to properties or facilities to enable automatic maintenance tracking
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Record serial numbers and warranty information to streamline claims
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Set priority levels to ensure critical assets receive faster response times
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Upload photos and manuals for quick reference by maintenance teams
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Enable IoT capabilities for smart devices to leverage real-time monitoring
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
