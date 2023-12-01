/* eslint-disable no-undef */

import '@testing-library/jest-dom';
import WalletData from '@/components/WalletData';
import { render, screen } from '@/test-utils';

describe('WalletData', () => {
  test('renders correctly', () => {
    render(<WalletData />);

    const ledgerBalanceText = screen.getByText(/ledger balance/i);
    const totalPayoutText = screen.getByText(/total payout/i);
    const totalRevenueText = screen.getByText(/total revenue/i);
    const pendingPayoutText = screen.getByText(/pending payout/i);

    expect(ledgerBalanceText).toBeInTheDocument();
    expect(totalPayoutText).toBeInTheDocument();
    expect(totalRevenueText).toBeInTheDocument();
    expect(pendingPayoutText).toBeInTheDocument();
  });
});
