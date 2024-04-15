function Withdraw(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h1>Withdraw</h1>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
