import RevenueLineChart from './RevenueLineChart';
import WalletData from './WalletData';

function Revenue() {
  return (
    <div className="grid grid-cols-3 gap-28">
      <div className="col-span-2">
        <RevenueLineChart />
      </div>
      <div className="">
        <WalletData />
      </div>
    </div>
  );
}

export default Revenue;
