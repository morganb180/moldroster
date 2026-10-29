---
name: mold-roster-find-firms
description: Find state-licensed mold assessors and remediators in TX, FL, NY and DC on Mold Roster by city/town or county, with credentials and links to each listing.
---

# Find firms on Mold Roster

Use this when someone needs state-licensed mold assessors and remediators in TX, FL, NY and DC. Data is the public listing data from https://moldroster.com/ (official licence records; retrieval dates are in each record). A listing is not an endorsement.

## Options (pick one)

1. **Search API**: `GET https://leads.radonroster.com/api/firms?site=mold&county=<county>&service=<code>&limit=10`
   - Location (one is required): `city`, `county` (plus `state` = TX/FL/NY/DC).
   - Service codes: `assessment` (Mold assessment), `remediation` (Mold remediation).
   - CORS is open. Spec: https://moldroster.com/openapi.json
2. **MCP**: streamable HTTP at `https://leads.radonroster.com/mcp?site=mold`, with tools `search_firms`, `get_firm` and `list_areas`.
3. **Static feeds** (no API call): https://moldroster.com/api/index.json lists every county/city feed, for example `https://moldroster.com/api/county/<slug>.json`. https://moldroster.com/api/firms.json has every firm.

## Using results

- Each firm has: `id`, `name`, `certification`, `issuing_agency`, `credentials[]` (number, expiry), `services`, `city`, `state`, `counties`, `cities`, `firm_url`, `quote_url` and, where the site shows it, `google_rating`.
- Area results have `match`: `local` means listed in that area's own section; `nearby` means listed under nearby/other firms.
- Phone and contact details are not in the API. Send people to `firm_url`.
- Mention that credentials should be confirmed with the issuing agency (link in `source.urls`).
- Do not scrape the HTML pages; use the feeds.
