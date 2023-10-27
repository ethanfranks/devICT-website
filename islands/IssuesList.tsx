import { GitHubIssue } from '../lib/github.ts';
import Card from '../components/Card.tsx';
import { useCallback, useState } from 'preact/hooks';

type Props = {
  repos: Array<string>;
  issues: Array<GitHubIssue>;
};

type LabelProps = {
  name: string;
  color: string;
}

const IssuesList = ({repos, issues}: Props) => {
  const [repoFilter, setRepoFilter] = useState(null);
  const showLabel = (label: LabelProps) => {
    return (
      <span style={"background-color: #".concat(label.color)} class="cursor-pointer font-bold ml-4 px-2 py-1 rounded-xl text-white text-xs whitespace-nowrap hover:text-black">
        {label.name}
        </span>
    )
  };

  return (
    <Card title="Current Issues">
      <div class="flex justify-between my-4">
        <select class="px-4 py-2" value={repoFilter} onChange={e => setRepoFilter(e.target.value)}>
          <option value={null}>Filter by Repo</option>
          {repos.map(repo => <option value={repo}>{repo.split("/").slice(-1)}</option>)}
        </select>
        {repoFilter && <button type="button" onClick={() => setRepoFilter(null)} class="bg-zinc-200 px-4">Clear Filters</button>}
      </div>
      <ul class="list-none">
        {issues.map((issue) => {
          const [orgName, repoName] = issue.repository_url.split("/").slice(-2);
          const repoPath = `${orgName}/${repoName}`;

          if (repoFilter && repoPath !== repoFilter) return;

          const repoUrl = `https://github.com/${repoPath}`;
          return (
            <li class="my-1">
              <span class="underline hover:text-gray-600">
                <a href={issue.html_url} class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                  <span class="font-bold">{repoPath}:</span>{" "}
                  {issue.title}
                </a>
              </span>
              {issue.labels.map(label => showLabel(label))}
            </li>
          );
        })}
      </ul>
    </Card>
  )
};

export default IssuesList;
