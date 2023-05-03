import { Link } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

type reqProps = {
    visible: boolean;
    onClose(): void;
};

const Confirmed = ({ visible, onClose, ...props }: reqProps) => {
    const router = useRouter();
    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-sans">
            <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
                    Thank you!
                </h5>
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 text-center">
                    Your reservation has been received!
                </h5>
                <p className="mb-8 font-normal text-gray-700 dark:text-gray-400 text-center">
                    Your table is <span className="font-semibold">#16</span>
                </p>

                <button
                    className="w-full text-center bg-custom-red hover:bg-custom-red-hov text-white py-2 px-20 rounded-md mb-2"
                    onClick={() => router.push("/user/menu")}
                >
                    View Menu
                </button>
                <button
                    className="text-center w-full hover:text-gray-500"
                    onClick={() => onClose()}
                >
                    close
                </button>
            </div>
        </div>
    );
};

export default Confirmed;
