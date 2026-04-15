import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="text-center space-y-6 px-4">
        
        <h1 className="text-9xl font-bold text-primary/20">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-light tracking-tight text-base-content">
            Page not found
          </h2>
          <p className="text-base-content/50 font-light">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        
        <div className="pt-4">
          <Link
            to="/"
            className="btn btn-outline btn-primary px-10 rounded-full font-medium tracking-wide uppercase text-xs"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;