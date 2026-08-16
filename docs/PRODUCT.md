# Willow's World — Product North Star

## The problem

Parents take thousands of photographs, but a camera roll preserves files rather than childhood. Context disappears: the funny thing a child said, why a day mattered, who was there, what changed, and how the parent felt. Media accumulates faster than anyone can organise it, while device loss, account loss and storage pressure create another risk.

## Promise

**Keep the photos. Keep the stories behind them.**

Willow's World turns an otherwise chaotic photo library into a private, living childhood story that a parent and child can enjoy now and the child can inherit later.

## Primary user

A parent or guardian documenting one child's life. Multi-child/family support should remain possible without compromising the clarity of the first experience.

## Core object: a Memory

A Memory is not merely an uploaded image. It can contain:

- original photos/videos
- capture date and corrected date
- people
- optional location
- inferred activity/context
- parent's notes or voice note
- an AI-assisted draft
- the parent's approved story
- tags/milestones
- privacy metadata
- provenance and edit history

## Core loop

**Capture/import → understand → group → draft → parent approves → remember together.**

The approval step is fundamental. AI is an assistant to memory, not an invented narrator of a child's life.

## MVP

The first complete product should prove that a parent can:

1. create a private family archive;
2. add a child's profile;
3. import a manageable batch of photos;
4. select/confirm which photos belong to the child;
5. have related photos grouped into candidate moments;
6. open a candidate and see factual context separated from uncertain inference;
7. add notes or corrections;
8. receive an editable story draft;
9. approve it as a Memory;
10. browse Memories chronologically in a beautiful timeline;
11. search/browse by age, date and milestone;
12. download/export originals and memory data.

## Deliberately not MVP

- public social feed
- engagement mechanics
- autonomous publishing of AI-written memories
- irreversible face identification
- advertising
- selling or training on family media
- complex extended-family permissions before the core parent/child experience works

## Experience direction

This should feel closer to a beautifully kept family album, journal and keepsake box than a SaaS dashboard. The visual language should age well: warm editorial typography, tactile album cues, generous whitespace, photography given priority, subtle motion, and no neon/glassmorphism/AI-dashboard clichés.

## Trust requirements

The application handles children's photographs and potentially biometric-like identity signals. Architecture must therefore follow privacy-by-design principles:

- private by default
- least privilege
- explicit consent/control around face recognition or face embeddings
- encryption in transit and at rest
- original-file integrity
- clear deletion and export
- auditable AI transformations
- data minimisation
- no model-training use of private media without a separate explicit opt-in
- conservative metadata/location handling

Legal/compliance requirements must be reviewed before a public launch, especially for UK users and children's data.

## Long-term possibilities

After the core loop is excellent, Willow's World can grow into voice memories, letters to a future child, yearly books, family contributions, milestone detection, 'On this day', physical keepsakes, private TV/tablet viewing, and eventual child handover/export.

## Success test

The MVP succeeds when a parent imports ordinary camera-roll photos and ends with a timeline they genuinely want to sit beside their child and look through — with stories that would otherwise have been forgotten.
