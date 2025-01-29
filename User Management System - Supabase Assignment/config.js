const {createClient} = supabase

const supabaseUrl = 'https://ngwarbaolsaaarmzpxaw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nd2FyYmFvbHNhYWFybXpweGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NTY4NjcsImV4cCI6MjA1MzMzMjg2N30.-HrMPmq7NUCio-7-K4X-Zid4N9c273NEL0OsNlbHINA'
const supabaseClient = createClient(supabaseUrl, supabaseKey)


window.supabase = supabaseClient 