import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

// Components
import { Button } from "@/Components/ui/button";

export default function Welcome() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-6 px-4">
                <h1 className="mb-8 text-4xl font-bold">Welcome to FlexDesk</h1>
                <div className="text-center">
                    <p className="mb-4 text-lg">Current count: {count}</p>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                    >
                        Increment Count
                    </button>
                </div>
                <div className="mt-10 w-full max-w-md">
                    <Link href={route("login")}>
                        <Button variant="outline">
                            Go to Login Page
                        </Button>
                    </Link>
                </div>
            </div>

        </>
    );
}
