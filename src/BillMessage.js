export default function BillMessage({ friend }) {
  const { balance, name } = friend;
  return (
    <>
      {balance < 0 && (
        <p className="red">
          You owe {name} {Math.abs(balance)}&euro;
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}&euro;
        </p>
      )}
      {balance === 0 && <p className="">you and {name} are even</p>}
    </>
  );
}
