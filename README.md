# Sourav AI Labs Site

Hugo-powered personal brand + blog site with a Claude-inspired warm editorial design system.

## Current UX

- Warm earthy design tokens (`#faf9f5`, `#d97757`, `#6a9bcc`, `#788c5d`)
- Typography: `Poppins` (UI/headings) + `Lora` (body)
- Sticky header + editorial hero with profile photo
- Category tabs + featured horizontal carousel
- Blog hub with filters, search, sort, and grid/list toggle
- Blog alerts (email notification for new posts)
- Learning section for online docs
- Private analytics hook (no public dashboard exposure)

## Local preview

```bash
hugo server -D
```

## Publish a blog post

```bash
hugo new posts/my-new-post.md
```

Set `draft: false` before publish.

## Profile photo

Image path:

- `static/images/profile.jpg`

Config:

```yaml
params:
  profile:
    image: "/images/profile.jpg"
    imageAlt: "Sourav profile photo"
```

## Private analytics (GoatCounter)

Set in `config.yaml`:

```yaml
params:
  analytics:
    provider: "goatcounter"
    goatcounterCode: "your-site-code"
    showPublicStats: false
```

How it works:

- Tracking script runs on public pages.
- Dashboard links are not exposed to users.
- You view metrics by logging into GoatCounter directly.

## Blog alerts via Buttondown

Set in `config.yaml`:

```yaml
params:
  newsletter:
    enabled: true
    provider: "buttondown"
    buttondownUsername: "your-buttondown-username"
    sourceFieldName: "tag"
    sourceFieldValue: "website"
```

How it works:

- Form posts directly to Buttondown embed endpoint.
- Emails are stored in Buttondown (`Subscribers`) and can be exported as CSV.
- Site sends topic metadata (`AI, Testing, Real-life learning experiences`).
- If `buttondownUsername` is empty, form renders but submit is disabled.

## Deliverability checklist

Configure DNS for sender domain:

- SPF
- DKIM
- DMARC

Without these, notification mails are more likely to land in spam.

## Learning pages

Create docs under `content/learn/`:

```bash
hugo new learn/my-topic.md
```

Optional front matter:

```yaml
doc_type: "Guide"
read_time: "8 min"
source: "Sourav AI Labs"
embed_url: ""
```

- `embed_url` empty: render markdown content.
- `embed_url` set: render embedded doc frame.
