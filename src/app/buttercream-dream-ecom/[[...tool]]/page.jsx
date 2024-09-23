import { NextStudio } from "next-sanity/studio";
import { metadata, viewport } from "next-sanity/studio";
import config from "sanity.config";
import { notFound } from "next/navigation";

export { metadata, viewport };

export const dynamic = "force-dynamic";

export default function DynamicToolPage({ params }) {
  const { tool } = params;

  // If no tool is specified, render the Sanity Studio
  if (!tool || tool.length === 0) {
    return <NextStudio config={config} />;
  }

  // Handle different tool routes
  switch (tool[0]) {
    case "products":
      return <ProductsPage />;
    case "categories":
      return <CategoriesPage />;
    case "orders":
      return <OrdersPage />;
    default:
      notFound();
  }
}

function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {/* Add your products listing component here */}
    </div>
  );
}

function CategoriesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {/* Add your categories listing component here */}
    </div>
  );
}

function OrdersPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      {/* Add your orders listing component here */}
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { tool: [] },
    { tool: ["products"] },
    { tool: ["categories"] },
    { tool: ["orders"] },
  ];
}
