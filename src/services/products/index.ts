export async function getProduct(API_URL:string) {
    try {
      const res = await fetch(API_URL, {
        cache: "no-store",
        next: {
          tags: ["products"]
        }
        
      });
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }