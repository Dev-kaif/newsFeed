import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../utils/config';

const signinSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type SigninFormValues = z.infer<typeof signinSchema>;

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
  });

  const navigate = useNavigate()

  const onSubmit = async (data: SigninFormValues) => {
    const res = await axios.post(`${BACKEND_URL}/api/auth/signin`,data);
    alert(res.data.message);
    localStorage.setItem('token',res.data.token)
    navigate('/newsFeed')
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-center text-xl font-semibold">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email')} className="mt-1 w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:border-blue-500 focus:ring focus:ring-blue-500" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="password">Password</label>
            <input id="password" type="password" {...register('password')} className="mt-1 w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:border-blue-500 focus:ring focus:ring-blue-500" />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Sign In</button>
        </form>
        <div className='flex gap-2'>
          <div>
           Don't have account ? 
            
            </div>
          <div className='text-blue-300' onClick={()=>{
            navigate('/auth/signUp')
          }}>Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
