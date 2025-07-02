
import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, FileText, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookAppointment = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    notes: ""
  });

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Appointment booking:", { ...formData, date, selectedTime });
    alert("Appointment booking submitted! We will contact you to confirm your appointment.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#85211d] to-[#f4c2c2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Schedule your visit with our professional medical team at Kaachire Medical Center
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-[#85211d] flex items-center">
                    <CalendarCheck className="h-6 w-6 mr-2" />
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Get in touch with us for any questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#85211d]" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">0558727124</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#85211d]" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">kaachreclinic2020@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#85211d]" />
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-gray-600">Mon - Fri: 8AM - 6PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#85211d]">Schedule Your Appointment</CardTitle>
                  <CardDescription>
                    Please fill out the form below to book your appointment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#85211d] focus:ring-[#85211d]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#85211d] focus:ring-[#85211d]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#85211d] focus:ring-[#85211d]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-[#85211d] focus:ring-[#85211d]"
                        />
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-gray-300",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="p-3 pointer-events-auto"
                            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            className={cn(
                              "text-sm",
                              selectedTime === time 
                                ? "bg-[#85211d] hover:bg-[#85211d]/90" 
                                : "border-gray-300 hover:bg-[#f4c2c2]/20"
                            )}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Reason for Visit */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Reason for Visit *
                      </label>
                      <Input
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., General checkup, Consultation, Follow-up"
                        className="border-gray-300 focus:border-[#85211d] focus:ring-[#85211d]"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes (Optional)
                      </label>
                      <Textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Any additional information or special requests..."
                        className="border-gray-300 focus:border-[#85211d] focus:ring-[#85211d]"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#85211d] to-[#f4c2c2] hover:from-[#f4c2c2] hover:to-[#85211d] text-white py-3 text-lg font-semibold"
                    >
                      Book Appointment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookAppointment;
