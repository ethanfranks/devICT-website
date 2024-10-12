// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about from "./routes/about.tsx";
import * as $api_upvote from "./routes/api/upvote.ts";
import * as $conduct from "./routes/conduct.tsx";
import * as $index from "./routes/index.tsx";
import * as $learn from "./routes/learn.tsx";
import * as $projects from "./routes/projects.tsx";
import * as $report from "./routes/report.ts";
import * as $support from "./routes/support.tsx";
import * as $Footer from "./islands/Footer.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $IssuesList from "./islands/IssuesList.tsx";
import * as $TopicItem from "./islands/TopicItem.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about.tsx": $about,
    "./routes/api/upvote.ts": $api_upvote,
    "./routes/conduct.tsx": $conduct,
    "./routes/index.tsx": $index,
    "./routes/learn.tsx": $learn,
    "./routes/projects.tsx": $projects,
    "./routes/report.ts": $report,
    "./routes/support.tsx": $support,
  },
  islands: {
    "./islands/Footer.tsx": $Footer,
    "./islands/Header.tsx": $Header,
    "./islands/IssuesList.tsx": $IssuesList,
    "./islands/TopicItem.tsx": $TopicItem,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
