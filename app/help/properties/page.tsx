import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, CheckCircle2, AlertCircle, Info, Building2, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PropertiesHelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3 text-balance">
            Property & Community Data Upload Guide
          </h1>
          <p className="text-lg text-slate-600 text-pretty">
            Configure your properties and communities to enable automated maintenance scheduling, tenant assignment,
            facility linkage, financial tracking, and comprehensive portfolio analytics.
          </p>
        </div>

        {/* Video Placeholder */}
        <Card className="mb-8 overflow-hidden border-orange-200 bg-gradient-to-br from-white to-orange-50/50">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-20 h-20 text-orange-400 mx-auto mb-4" />
                <p className="text-white text-lg font-medium">Video Tutorial Coming Soon</p>
                <p className="text-slate-300 text-sm mt-2">Complete walkthrough of property and community setup</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Understanding the Structure */}
        <Card className="mb-8 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Info className="w-6 h-6 text-orange-500" />
              Understanding Properties & Communities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-slate-900">Communities</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Communities group properties under single management, within the same HOA, or with access to the same
                  shared facilities. Use this to organize properties for mass communications, tenant management, and
                  reporting.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-slate-600" />
                  <h4 className="font-semibold text-slate-900">Properties</h4>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Each property record represents one residence or building. Properties link to communities and contain
                  detailed information about the physical asset, ownership, tenants, and financial data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabbed Content */}
        <Tabs defaultValue="communities" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="communities">Communities</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
          </TabsList>

          {/* Communities Tab */}
          <TabsContent value="communities" className="space-y-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  Required Community Fields
                </CardTitle>
                <CardDescription>Essential information for each community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FieldItem
                  name="Community ID"
                  technical="id"
                  description="Unique identifier for linking communities with properties. Recommend using simple numbering: 1, 2, 3..."
                  required
                />
                <FieldItem
                  name="Community Name"
                  technical="name"
                  description="The name of the community grouping (e.g., Sunset Hills HOA, Downtown Portfolio)"
                  required
                />
                <FieldItem
                  name="Address"
                  technical="address"
                  description="Physical address of the main community office or gate address"
                  required
                />
                <FieldItem
                  name="Description"
                  technical="description"
                  description="Brief overview of the community and its characteristics"
                  required={false}
                />
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl">Community Setup Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Create communities before adding properties to ensure proper linking
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Use simple numeric IDs (1, 2, 3) for easier reference and management
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Group properties logically by management structure or shared amenities
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Properties Tab */}
          <TabsContent value="properties" className="space-y-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                  Required Property Fields
                </CardTitle>
                <CardDescription>Core information needed for each property</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FieldItem
                  name="Property ID"
                  technical="id"
                  description="Unique identifier for this property. Recommend using simple numbering: 1, 2, 3..."
                  required
                />
                <FieldItem
                  name="Property Name"
                  technical="name"
                  description="Official or display name (e.g., Maplewood Towers, Sunrise Plaza)"
                  required
                />
                <FieldItem
                  name="Street Address"
                  technical="addressStreet"
                  description="Full property address including street, city, province/state, postal code, and country"
                  required
                />
                <FieldItem
                  name="Community"
                  technical="community"
                  description="The Community ID from your communities upload to link this property"
                  required
                />
                <FieldItem
                  name="Residential Type"
                  technical="residencialType"
                  description={`Must be either "Individual" (single family) or "Unit" (multi-occupancy like duplex, apartments)`}
                  required
                />
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  Important Property Concepts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Residential Type</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <p>
                      <strong>Individual:</strong> Single occupancy households with one "family" tenant (e.g.,
                      single-family homes)
                    </p>
                    <p>
                      <strong>Unit:</strong> Multi-occupancy households with multiple units, families, or tenant
                      contracts (e.g., duplex, houses with basement apartments, quadplexes)
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Parent Property ID</h4>
                  <p className="text-sm text-slate-700">
                    <strong>Only for Units:</strong> If adding units, use this field to link to the parent property.
                    This creates the hierarchical relationship between the main building and its individual units.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl">Optional Fields That Add Value</CardTitle>
                <CardDescription>Enhance functionality with these additional fields</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <OptionalFieldCard
                    name="Property Type"
                    technical="propertyType"
                    description="Residential, Land, Commercial, etc."
                    benefit="Enables property classification and reporting"
                  />
                  <OptionalFieldCard
                    name="Square Footage"
                    technical="squareFootage"
                    description="Gross, rentable, and/or usable area"
                    benefit="Supports valuation and space management"
                  />
                  <OptionalFieldCard
                    name="Year Built"
                    technical="yearBuilt"
                    description="Year of construction completion"
                    benefit="Helps with maintenance planning and depreciation"
                  />
                  <OptionalFieldCard
                    name="Owner Information"
                    technical="ownerName, ownerEmail, ownerPhone"
                    description="Legal owner contact details"
                    benefit="Streamlines owner communications"
                  />
                  <OptionalFieldCard
                    name="Lease Dates"
                    technical="leaseAgreementsStartDate, leaseAgreementsEndDate"
                    description="Active lease start and end dates"
                    benefit="Automates lease renewal reminders"
                  />
                  <OptionalFieldCard
                    name="Monthly Rent"
                    technical="monthlyRent"
                    description="Average or total rent collected"
                    benefit="Enables financial reporting and analytics"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Best Practices */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl">Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Always create communities first, then link properties to them</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Use consistent naming conventions across your portfolio</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Include GPS coordinates for properties without standard addresses
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Keep owner and tenant information up-to-date for effective communication
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Link properties to shared facilities through the Community ID for access control
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
