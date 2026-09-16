"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()
    return (
        <main className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
            <div className="text-center">
                <div
                    className="fw-bold text-primary fw-120"
                >
                    404
                </div>

                <h1 className="mt-4 fw-bold">Page Not Found</h1>

                <p className="text-secondary mt-3 mb-4">
                    Sorry, the page you are looking for doesn't exist
                    or may have been moved.
                </p>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        type="button"
                        className="btn btn-primary px-4 py-2"
                        onClick={() => router.push("/")}
                    >
                        Go Home
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-secondary px-4 py-2"
                        onClick={() => router.back()}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </main>

    )
}