
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dzyuodzipruqsgfvjyna.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6eXVvZHppcHJ1cXNnZnZqeW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI1MTM0MzcsImV4cCI6MTk4ODA4OTQzN30.ASY_-PiZ_Tm4_JxkQDH8clOLQRlhfXnsrXDDvN8Mg4Q'
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getPosts() {

    let { data: rawPosts, error } = await supabase
    .from('posts')
    .select('*')

    return rawPosts.sort(
        (a, b) =>
            new Date(b.id).valueOf() -
            new Date(a.id).valueOf()
    )
}