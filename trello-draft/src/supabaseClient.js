import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lhjtxbnbkzjycdbwxksx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoanR4Ym5ia3pqeWNkYnd4a3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNzQ4NzUsImV4cCI6MjA4Mjc1MDg3NX0.ksXBrpWmU0JU_fcvhlnh2kTOovsQoWnwDu-nfR0OX8Q'

export const supabase = createClient(supabaseUrl, supabaseKey)

