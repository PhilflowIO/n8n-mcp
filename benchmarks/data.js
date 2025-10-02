window.BENCHMARK_DATA = {
  "lastUpdate": 1759382673966,
  "repoUrl": "https://github.com/PhilflowIO/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4854a50854003072814c59828720b6d646292e10",
          "message": "Merge pull request #244 from czlonkowski/feature/webhook-error-execution-guidance\n\nfeat: enhance webhook error messages with execution guidance",
          "timestamp": "2025-10-01T12:08:49+02:00",
          "tree_id": "6b499b925c568797822462bd7941a791b38b8f18",
          "url": "https://github.com/PhilflowIO/n8n-mcp/commit/4854a50854003072814c59828720b6d646292e10"
        },
        "date": 1759382673254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.019,
            "range": "0.5124",
            "unit": "ms",
            "extra": "52592 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1167,
            "range": "0.6927999999999996",
            "unit": "ms",
            "extra": "321 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "range": "0.2503",
            "unit": "ms",
            "extra": "209547 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.064,
            "range": "0.5588",
            "unit": "ms",
            "extra": "15624 ops/sec"
          }
        ]
      }
    ]
  }
}