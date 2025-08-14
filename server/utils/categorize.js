// Simple keyword-based auto-categorization.
// In production, replace this with ML model or external AI service.
const categories = {
  Food: ['restaurant','cafe','burger','coffee','dinner','lunch','breakfast','food'],
  Travel: ['uber','ola','flight','taxi','bus','train','travel','metro'],
  Shopping: ['amazon','flipkart','mall','store','shop','clothes','shoes'],
  Bills: ['electricity','water','bill','internet','netflix','subscription','phone'],
  Salary: ['salary','payroll','income','company'],
  Entertainment: ['movie','cinema','spotify','concert','game']
};

function autoCategorize(description, merchant) {
  const text = ((description || '') + ' ' + (merchant || '')).toLowerCase();
  for (const [cat, keywords] of Object.entries(categories)) {
    for (const kw of keywords) {
      if (text.includes(kw)) return cat;
    }
  }
  return 'Other';
}

module.exports = { autoCategorize };
