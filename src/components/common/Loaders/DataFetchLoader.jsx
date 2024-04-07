import { Bars } from 'react-loader-spinner';

const DataFetchLoader = () => {
  return (
    <Bars
      height='80'
      width='80'
      color='#2c3e50'
      ariaLabel='bars-loading'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
    />
  );
};

export default DataFetchLoader;
