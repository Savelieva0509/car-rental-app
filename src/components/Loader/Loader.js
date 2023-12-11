import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="200"
      width="200"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{ margin: '20' }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="white"
      color="rgba(52, 112, 255, 1)
"
    />
  );
};

export default Loader;
