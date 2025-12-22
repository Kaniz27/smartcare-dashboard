export interface CallLogEntry {
  day: string;
  success: number;
  fail: number;
  total: number;
}

export interface quickStatsEntry {
  call_id: string;
  end_time: string;
  start_time: string;
  successs_evalation: boolean;
}

export interface CallStats {
  total_calls: number;
  total_cost: number;
  total_duration: number;
  balance: number;
  success_rate: number;
  total_success_calls: number;
  total_failed_calls: number;
  chart_data: CallLogEntry[];
  quick_stats: quickStatsEntry[];
}

