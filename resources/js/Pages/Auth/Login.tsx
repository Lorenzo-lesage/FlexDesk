import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';


// Components
import { LoginForm } from "@/Components/login-form";


export default function Login({ status, canResetPassword } : { status?: string, canResetPassword?: boolean }) {
    return (
        <GuestLayout>
            <Head title="Log in" />

            <LoginForm className="mb-8" canResetPassword={canResetPassword} />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </GuestLayout>
    );
}
