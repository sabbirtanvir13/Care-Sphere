// "use server";

// import { dbConnect, collections } from "@/lib/dbConnect";

// export const getAllServices = async () => {
//   const services = await dbConnect(collections.SERVICES).find().toArray();

//   return services.map(s => ({
//     ...s,
//     _id: s._id.toString(),
//   }));
// };


// export const getSingleServiceBySlug = async (slug) => {
//   if (!slug) return {};

//   const service = await dbConnect(collections.SERVICES).findOne({ slug });

//   if (!service) return {};

//   return {
//     ...service,
//     _id: service._id.toString(),
//   };
// };
"use server";

import { dbConnect, collections } from "@/lib/dbConnect";

export const getAllServices = async (searchTerm = "") => {
  const query = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { category: { $regex: searchTerm, $options: "i" } },
          { description: { $regex: searchTerm, $options: "i" } },
        ],
      }
    : {};

  const services = await dbConnect(collections.SERVICES)
    .find(query)
    .toArray();

  return services.map(s => ({
    ...s,
    _id: s._id.toString(),
  }));
};


export const getSingleServiceBySlug = async (slug) => {
  if (!slug) return {};

  const service = await dbConnect(collections.SERVICES).findOne({ slug });

  if (!service) return {};

  return {
    ...service,
    _id: service._id.toString(),
  };
};
