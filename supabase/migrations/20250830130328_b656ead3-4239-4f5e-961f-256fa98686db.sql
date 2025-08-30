-- Fix contact_messages security vulnerability
-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Allow authenticated users to view contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Allow authenticated users to update contact messages" ON public.contact_messages;

-- Create secure policies that restrict access to admin/staff only
CREATE POLICY "Only admin staff can view contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'staff')
);

CREATE POLICY "Only admin staff can update contact messages"
ON public.contact_messages
FOR UPDATE  
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'staff')
);

-- Keep public insert policy for contact form submissions (no authentication required)
-- This policy already exists and is correct