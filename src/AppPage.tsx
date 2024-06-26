import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { categories } from "./data/home";
import { PageHeader } from "./layouts/PageHeader";
import { Sidebar } from "./layouts/Sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";
import { BottomBar } from "./layouts/Bottombar";
import { BlogPage } from "./layouts/BlogPage";

export default function AppPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="sticky top-0 bg-white z-10 pb-4 pl-4">
          <CategoryPills
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              <BlogPage />
              <div>
                <BottomBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
