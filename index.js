const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

// Group store endpoint
app.get("/groupstore/:groupId", async (req, res) => {
  const groupId = req.params.groupId;
  try {
    const response = await fetch(`https://groups.roblox.com/v1/groups/${groupId}/store?limit=100`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(PORT, () => console.log("Proxy running on port " + PORT));
