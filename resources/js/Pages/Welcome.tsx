import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { Button } from "../Components/ui/button";

export default function Welcome() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 dark:bg-gray-900 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 dark:bg-gray-800 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto max-w-md">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                            Welcome to Our Application
                        </h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            This is the welcome page of our application. Please
                            log in or register to continue.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <Link
                                href="/login"
                                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/register"
                                className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
                            >
                                Register
                            </Link>
                        </div>
                        <div className="mt-6">
                            <Button
                                className=" bg-black"
                                onClick={() => setCount(count - 1)}
                                size="sm"
                            >
                                -
                            </Button>
                            <span className="mx-4 text-gray-900 dark:text-gray-100">
                                {count}
                            </span>
                            <Button
                                className=" bg-black"
                                onClick={() => setCount(count + 1)}
                                size="sm"
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
