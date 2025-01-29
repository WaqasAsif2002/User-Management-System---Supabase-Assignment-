async function checkSession() {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw error; // Handle errors gracefully

    const authPages = ["/index.html", "/login.html", "/"];
    const currentPath = window.location.pathname;
    const isAuthPage = authPages.some((page) => currentPath.includes(page));

    const { session } = data;

    // Redirect based on session status and page type
    if (session) {
      if (isAuthPage) {
        window.location.href = '/dash.html';
      }
    } else {
      if (!isAuthPage) {
        window.location.href = '/login.html';
      }
    }

    console.log("Session:", session); // For debugging

  } catch (error) {
    console.error("Error fetching session:", error);
  }
}

window.onload = checkSession;
