
-- Create appointments table to store appointment bookings
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  reason_for_visit TEXT NOT NULL,
  additional_notes TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_messages table to store contact form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_inquiry TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'responded')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX idx_appointments_date ON public.appointments(preferred_date);
CREATE INDEX idx_appointments_status ON public.appointments(status);
CREATE INDEX idx_appointments_created_at ON public.appointments(created_at);
CREATE INDEX idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at);

-- Since this is a public hospital website, we'll make these tables accessible without authentication
-- Enable Row Level Security but create permissive policies
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies that allow public access for inserting data (appointments and contact forms)
CREATE POLICY "Allow public to insert appointments" 
  ON public.appointments 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public to insert contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Only authenticated users (hospital staff) can view and manage the data
CREATE POLICY "Allow authenticated users to view appointments" 
  ON public.appointments 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update appointments" 
  ON public.appointments 
  FOR UPDATE 
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to view contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update contact messages" 
  ON public.contact_messages 
  FOR UPDATE 
  TO authenticated
  USING (true);
