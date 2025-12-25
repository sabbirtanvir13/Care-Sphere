import Container from "@/components/Container";

const Loading = () => {
  return (
   <Container>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
        >
          {/* Image skeleton */}
          <div className="h-48 w-full bg-gray-200" />

          {/* Content skeleton */}
          <div className="p-5 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />

            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-1/2" />
              <div className="h-3 bg-gray-200 rounded w-1/3" />
            </div>

            <div className="flex justify-between items-center pt-3 border-t">
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-16" />
                <div className="h-5 bg-gray-300 rounded w-20" />
              </div>
              <div className="h-9 bg-gray-300 rounded-lg w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
   </Container>
  );
};

export default Loading;
