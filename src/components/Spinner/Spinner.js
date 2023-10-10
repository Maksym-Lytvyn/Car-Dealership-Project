import { Puff } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 1000,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Puff
        height="80"
        width="80"
        radius={1}
        color="yellow"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
