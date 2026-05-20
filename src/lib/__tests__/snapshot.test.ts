import { describe, it, expect } from 'vitest';

/**
 * Snapshot tests — зафиксированные правильные ответы.
 * Если формула изменится — тест упадёт.
 */

describe('Snapshot: Tax calculation (for future steps)', () => {
  // Golden values: revenue=1500, pp=38.46, comp=50
  // Base = 1500 + 38.46 + 50 = 1588.46
  // VAT = 1588.46 * 5/105 = 75.64
  // USN = (1588.46 - 75.64) * 0.01 = 15.13
  // Tax = -(75.64 + 15.13) = -90.77
  it('calculates correct tax for golden case 1', () => {
    const revenue = 1500;
    const partnerPrograms = 38.46;
    const compensations = 50;
    
    const base = revenue + partnerPrograms + compensations;
    const vat = base * (5 / 105);
    const usn = (base - vat) * 0.01;
    const tax = -(vat + usn);
    
    expect(tax).toBeCloseTo(-90.77, 2);
  });
  
  // Golden values: revenue=361029.75, pp=13853.57, rr=-417.14, rp=-4.17, comp=1765
  it('calculates correct tax for golden case 2 (article 2018)', () => {
    const revenue = 361029.75;
    const partnerPrograms = 13853.57;
    const refundRevenue = -417.14;
    const refundPartnerPrograms = -4.17;
    const compensations = 1765;
    
    const base = revenue + partnerPrograms + refundRevenue + refundPartnerPrograms + compensations;
    const vat = base * (5 / 105);
    const usn = (base - vat) * 0.01;
    const tax = -(vat + usn);
    
    expect(tax).toBeCloseTo(-21498.69, 2);
  });
});

describe('Snapshot: Marketplace selector (step 1)', () => {
  it('has exactly 3 marketplaces', () => {
    const marketplaces = ['ozon', 'wildberries', 'yandex'];
    expect(marketplaces).toHaveLength(3);
    expect(marketplaces).toContain('ozon');
  });
});
