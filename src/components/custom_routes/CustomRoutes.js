import Main from "../Main";
import {Routes, Route} from 'react-router-dom';
import SingleMovie from "../single_data/SingleMedia";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route path='/singlemedia/:id' element={<SingleMovie />} />
      <Route path='*' element={<Main />} />
    </Routes>
  )
}

export default CustomRoutes