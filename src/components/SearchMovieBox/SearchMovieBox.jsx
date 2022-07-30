import { useForm } from 'react-hook-form';
import { toast, Zoom } from 'react-toastify';

const SearchMovieBox = ({ onSearhSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmitForm = data => {
    if (data.search === '') {
      toast.warn('Введите название фильма', {position:"top-center", transition: Zoom});
      return;
    }
    const normalizedData = {
      ...data,
      search: data.search.toLowerCase()
    }
    onSearhSubmit(normalizedData);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input {...register('search')} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMovieBox;
