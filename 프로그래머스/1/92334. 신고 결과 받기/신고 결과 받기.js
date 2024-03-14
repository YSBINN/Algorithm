function solution(id_list, report, k) {
  const reportMap = new Map();
  const reporterMap = new Map();

  id_list.forEach(id => {
    reportMap.set(id, new Set());
    reporterMap.set(id, 0);
  });

  report.forEach(r => {
    const [reporter, reported] = r.split(" ");
    reportMap.get(reported).add(reporter);
  });

  for (const [_, reporters] of reportMap) {
    if (reporters.size >= k) {
      reporters.forEach(reporter => {
        reporterMap.set(reporter, reporterMap.get(reporter) + 1);
      });
    }
  }

  return id_list.map(id => reporterMap.get(id));
}