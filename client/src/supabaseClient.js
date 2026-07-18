import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wbjmqvjivgkbegbfbzgs.supabase.co";

const supabaseAnonKey = "sb_publishable_hctFf1sR2EnJtBDIgTpD6Q_Q_sKPsWS";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);