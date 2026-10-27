# nicholascallum22.github.io: source

Source for the portfolio of Nischal Prathipati, mechanical design engineer. Live at <https://nicholascallum22.github.io>.

## How it works

- This `source` branch holds the code and content. GitHub Actions builds it on every push.
- The built site goes to the `main` branch, which GitHub Pages serves.

## Editing content

| What | Where |
| --- | --- |
| Profile, results, experience, skills, education, research | `src/data/content.ts` |
| Case-study list (titles, summaries, evidence types) | `src/data/cases.ts` |
| Case-study text | `public/articles/<slug>/<slug>.md` |
| CV download | `public/cv/Nischal_Prathipati_CV.pdf` |
| Colours and type | `src/styles/index.css` |

Every figure must trace to a claim in the master CV fact file and keep its qualifier (reported, simulated, calculated, estimated, approximately).

Edit a file on GitHub in this branch and commit: the site rebuilds and deploys in about two minutes.

## Credits

Built on [Showlit](https://github.com/pm25/showlit) by pm25, used under the MIT licence (see `LICENSE-SHOWLIT.txt`). Typeface: Bricolage Grotesque (SIL Open Font Licence) via Fontsource.
