-- আত্মচরিত (ঈশ্বরচন্দ্র বিদ্যাসাগর) — HSC Bangla 1st Paper
-- Subject + chapter + note + textbook exercises + new practice questions.

insert into subjects (id, level_id, name, slug, paper, "group", sort_order) values
  ('b0000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002', 'Bangla 1st Paper', 'bangla-1st-paper', '1st', null, 3)
on conflict (id) do nothing;

insert into chapters (id, subject_id, name, slug, chapter_number, sort_order) values
  ('b0000000-0000-0000-0000-000000000101', 'b0000000-0000-0000-0000-000000000001', 'আত্মচরিত', 'atmacharit', 1, 1)
on conflict (id) do nothing;

insert into notes (id, chapter_id, title, slug, content, sort_order) values (
  'b0000000-0000-0000-0000-000000000201', 'b0000000-0000-0000-0000-000000000101', 'আত্মচরিত — পাঠ নোট', 'path-note',
  $${"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"সরল ভাষায় সারাংশ"}]},{"type":"paragraph","content":[{"type":"text","text":"বীরসিংহ গ্রামে জন্ম নেওয়া ঈশ্বরচন্দ্রের বাবা ঠাকুরদাস উপার্জনের আশায় কলকাতায় যান। একদিন প্রচণ্ড ক্ষুধার্ত অবস্থায় পথে এক দরিদ্র বিধবা মুড়িওয়ালীর কাছে জল চাইলে তিনি আপন সন্তানের মতো যত্ন করে তাঁকে খাওয়ান, বিনিময়ে কিছু নেননি — এই ঘটনা শুনেই ঈশ্বরচন্দ্রের মনে নারীজাতির প্রতি গভীর শ্রদ্ধার জন্ম হয়।"}]},{"type":"paragraph","content":[{"type":"text","text":"এরপর তাঁর নিজের ছেলেবেলার কথা: পিতামহী ও কনিষ্ঠা পিসি রাইমণির অকৃত্রিম স্নেহ, পাঁচ বছর বয়সে গ্রামের পাঠশালায় ভর্তি, জ্বর-প্লীহায় দীর্ঘ অসুস্থতা কাটিয়ে ওঠা, স্পষ্টবাদী ও নির্ভীক পিতামহ রামজয় তর্কভূষণের মৃত্যু, এবং সবশেষে বিখ্যাত মাইলস্টোনের গল্প — কলকাতা যাওয়ার পথে পথের ধারের পাথরে খোদাই সংখ্যা দেখে একদিনেই নিজে নিজে অঙ্ক চিনে ফেলা, যা দেখে সবাই তাঁর অসাধারণ মেধায় মুগ্ধ হন এবং তাঁকে ভালো শিক্ষা দেওয়ার সিদ্ধান্ত নেওয়া হয়।"}]}]}$$::jsonb,
  1
) on conflict (id) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'পাঠ্যবই MCQ-1', 'atmacharit-mcq-01',
  $${"stem":"'আত্মচরিত' রচনাটিতে কে স্পষ্টবাদী?","options":[{"key":"A","text":"কালীকান্ত চট্টোপাধ্যায়"},{"key":"B","text":"রাধামোহন বিদ্যাভূষণ"},{"key":"C","text":"রামজয় তর্কভূষণ"},{"key":"D","text":"ভাগবতচরণ সিংহ"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'পাঠ্যবই MCQ-2', 'atmacharit-mcq-02',
  $${"stem":"কোন গুণের কারণে কালীকান্ত চট্টোপাধ্যায়কে উপযুক্ত শিক্ষক বলা যায়?","options":[{"key":"A","text":"আগ্রহের জন্য"},{"key":"B","text":"সদিচ্ছার জন্য"},{"key":"C","text":"যত্নশীলতার জন্য"},{"key":"D","text":"প্রশিক্ষণের জন্য"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'পাঠ্যবই MCQ-3', 'atmacharit-mcq-03',
  $${"stem":"মেঘনা গ্রামের অপু কাজের সন্ধানে ঢাকায় এসে বংশালের সাইকেল ব্যবসায়ী কাদের সাহেবের কাছে আশ্রয় নিলেন। গ্রামের স্কুলটি তেমন ভালো নয় বলে তিনি পুত্র উপলকে মালিকের বাসায় এনে রাখেন। মালিকের বোন রুমা অপত্য স্নেহ দিয়ে উপলকে দেখাশুনা করতে লাগলেন। উপল একাকিত্ব ও গ্রামের স্মৃতি ভুলে সেখানে দিনাতিপাত করতে লাগল। এই সান্নিধ্যের কারণে উপল নারীর প্রতি আরও শ্রদ্ধাশীল হয়ে ওঠে।\\n\\nউদ্দীপকের রুমা 'আত্মচরিত' রচনার কোন চরিত্রের সঙ্গে তুলনীয়?","options":[{"key":"A","text":"গৃহিণীর"},{"key":"B","text":"জ্যেষ্ঠ ভগিনীর"},{"key":"C","text":"কনিষ্ঠা ভগিনীর"},{"key":"D","text":"পিতামহীদেবীর"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'পাঠ্যবই MCQ-4', 'atmacharit-mcq-04',
  $${"stem":"উক্ত চরিত্রটির মধ্যে প্রকাশিত হয়েছে— i. জননীর স্নেহ ii. দায়িত্ববোধ iii. মমত্ব। নিচের কোনটি ঠিক?","options":[{"key":"A","text":"i ও ii"},{"key":"B","text":"ii ও iii"},{"key":"C","text":"i ও iii"},{"key":"D","text":"i, ii ও iii"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-1', 'atmacharit-mcq-05',
  $${"stem":"ঈশ্বরচন্দ্র বিদ্যাসাগরের জন্ম কত সালে?","options":[{"key":"A","text":"১৮১৮"},{"key":"B","text":"১৮২০"},{"key":"C","text":"১৮২২"},{"key":"D","text":"১৮২৫"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-2', 'atmacharit-mcq-06',
  $${"stem":"ঈশ্বরচন্দ্রের জন্মস্থান কোন জেলায়?","options":[{"key":"A","text":"হুগলি"},{"key":"B","text":"মেদিনীপুর"},{"key":"C","text":"বর্ধমান"},{"key":"D","text":"নদীয়া"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-3', 'atmacharit-mcq-07',
  $${"stem":"ঈশ্বরচন্দ্রের পিতার নাম কী?","options":[{"key":"A","text":"রামজয় তর্কভূষণ"},{"key":"B","text":"ঠাকুরদাস বন্দ্যোপাধ্যায়"},{"key":"C","text":"রাধামোহন বিদ্যাভূষণ"},{"key":"D","text":"ভাগবতচরণ সিংহ"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-4', 'atmacharit-mcq-08',
  $${"stem":"ঈশ্বরচন্দ্রের মাতার নাম কী?","options":[{"key":"A","text":"রাইমণি"},{"key":"B","text":"ভগবতী দেবী"},{"key":"C","text":"দুর্গামণি"},{"key":"D","text":"কাদম্বিনী"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-5', 'atmacharit-mcq-09',
  $${"stem":"'বিদ্যাসাগর' উপাধিটি ঈশ্বরচন্দ্র কোথা থেকে অর্জন করেন?","options":[{"key":"A","text":"ফোর্ট উইলিয়াম কলেজ"},{"key":"B","text":"হিন্দু কলেজ"},{"key":"C","text":"সংস্কৃত কলেজ"},{"key":"D","text":"মেট্রোপলিটন কলেজ"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-6', 'atmacharit-mcq-10',
  $${"stem":"সংস্কৃত কলেজে ঈশ্বরচন্দ্র কত বছর নিরবচ্ছিন্ন অধ্যয়ন করেন?","options":[{"key":"A","text":"দশ বছর"},{"key":"B","text":"বারো বছর"},{"key":"C","text":"চৌদ্দ বছর"},{"key":"D","text":"ষোলো বছর"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-7', 'atmacharit-mcq-11',
  $${"stem":"ঈশ্বরচন্দ্র কত বছর বয়সে পিতার সঙ্গে কলকাতায় আসেন?","options":[{"key":"A","text":"পাঁচ"},{"key":"B","text":"ছয়"},{"key":"C","text":"আট"},{"key":"D","text":"দশ"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-8', 'atmacharit-mcq-12',
  $${"stem":"বাংলা গদ্যের প্রথম শিল্পী বলা হয় কাকে?","options":[{"key":"A","text":"বঙ্কিমচন্দ্র চট্টোপাধ্যায়"},{"key":"B","text":"ঈশ্বরচন্দ্র বিদ্যাসাগর"},{"key":"C","text":"রবীন্দ্রনাথ ঠাকুর"},{"key":"D","text":"প্রমথ চৌধুরী"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-9', 'atmacharit-mcq-13',
  $${"stem":"ঈশ্বরচন্দ্র প্রথম গদ্যে কী প্রবর্তন করে বাংলা গদ্যে শৃঙ্খলা আনয়ন করেন?","options":[{"key":"A","text":"চলিত ভাষা"},{"key":"B","text":"যতিচিহ্নের যথাযথ ব্যবহার"},{"key":"C","text":"সমাসবদ্ধ পদ"},{"key":"D","text":"তৎসম শব্দ"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-10', 'atmacharit-mcq-14',
  $${"stem":"ঈশ্বরচন্দ্র বিদ্যাসাগরের প্রথম গ্রন্থের নাম কী?","options":[{"key":"A","text":"বর্ণপরিচয়"},{"key":"B","text":"শকুন্তলা"},{"key":"C","text":"বেতাল পঞ্চবিংশতি"},{"key":"D","text":"সীতার বনবাস"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-11', 'atmacharit-mcq-15',
  $${"stem":"নিচের কোনটি ঈশ্বরচন্দ্র বিদ্যাসাগরের রচনা নয়?","options":[{"key":"A","text":"বর্ণপরিচয়"},{"key":"B","text":"আখ্যানমঞ্জরী"},{"key":"C","text":"দুর্গেশনন্দিনী"},{"key":"D","text":"ভ্রান্তিবিলাস"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-12', 'atmacharit-mcq-16',
  $${"stem":"ঈশ্বরচন্দ্র বিদ্যাসাগর কত সালে মৃত্যুবরণ করেন?","options":[{"key":"A","text":"১৮৮৫"},{"key":"B","text":"১৮৮৯"},{"key":"C","text":"১৮৯১"},{"key":"D","text":"১৮৯৫"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-13', 'atmacharit-mcq-17',
  $${"stem":"ঈশ্বরচন্দ্র বিদ্যাসাগর নিজ অর্থে কোন কলেজ প্রতিষ্ঠা করেন?","options":[{"key":"A","text":"সংস্কৃত কলেজ"},{"key":"B","text":"মেট্রোপলিটন কলেজ"},{"key":"C","text":"ফোর্ট উইলিয়াম কলেজ"},{"key":"D","text":"হিন্দু কলেজ"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-14', 'atmacharit-mcq-18',
  $${"stem":"ঈশ্বরচন্দ্র ১৮৪১ সালে কোন পদে যোগদান করেন?","options":[{"key":"A","text":"অধ্যক্ষ"},{"key":"B","text":"হেড পণ্ডিত"},{"key":"C","text":"শিক্ষা পরিদর্শক"},{"key":"D","text":"শিক্ষক"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-15', 'atmacharit-mcq-19',
  $${"stem":"'আত্মচরিত' রচনাটি কোন ধরনের রচনা?","options":[{"key":"A","text":"কল্পনাধর্মী"},{"key":"B","text":"আত্মজীবনীমূলক বর্ণনাধর্মী"},{"key":"C","text":"প্রবন্ধধর্মী"},{"key":"D","text":"পত্রধর্মী"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-16', 'atmacharit-mcq-20',
  $${"stem":"আত্মচরিতে ঈশ্বরচন্দ্র কার কার কথা বর্ণনা করেছেন?","options":[{"key":"A","text":"পিতা, পিতামহ ও জননী"},{"key":"B","text":"স্ত্রী ও সন্তান"},{"key":"C","text":"শিক্ষক ও সহপাঠী"},{"key":"D","text":"প্রতিবেশী"}],"correct_option":"A"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-17', 'atmacharit-mcq-21',
  $${"stem":"বীরসিংহ গ্রামের কালীকান্ত চট্টোপাধ্যায়ের পরিচয় কী?","options":[{"key":"A","text":"জমিদার"},{"key":"B","text":"পাঠশালার শিক্ষক"},{"key":"C","text":"চিকিৎসক"},{"key":"D","text":"পুরোহিত"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-18', 'atmacharit-mcq-22',
  $${"stem":"কালীকান্ত চট্টোপাধ্যায়কে উপযুক্ত শিক্ষক বলার কারণ কী?","options":[{"key":"A","text":"তিনি ধনী ছিলেন"},{"key":"B","text":"তিনি পরিশ্রমী ও যত্নবান ছিলেন"},{"key":"C","text":"তিনি সংস্কৃত জানতেন"},{"key":"D","text":"তিনি ইংরেজি জানতেন"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-19', 'atmacharit-mcq-23',
  $${"stem":"ঈশ্বরচন্দ্র পাঠশালায় শিক্ষার এক বছর পর কী রোগে আক্রান্ত হন?","options":[{"key":"A","text":"বসন্ত"},{"key":"B","text":"জ্বর ও পরে প্লীহা"},{"key":"C","text":"কলেরা"},{"key":"D","text":"যক্ষ্মা"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-20', 'atmacharit-mcq-24',
  $${"stem":"ঈশ্বরচন্দ্রের চিকিৎসার ভার কার হাতে অর্পিত হয়েছিল?","options":[{"key":"A","text":"রাধামোহন বিদ্যাভূষণের নির্বাচিত বৈদ্যের"},{"key":"B","text":"পিতা ঠাকুরদাসের"},{"key":"C","text":"পিতামহ রামজয়ের"},{"key":"D","text":"কালীকান্ত চট্টোপাধ্যায়ের"}],"correct_option":"A"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-21', 'atmacharit-mcq-25',
  $${"stem":"ঈশ্বরচন্দ্রের পিতামহ রামজয় তর্কভূষণের চরিত্রের বৈশিষ্ট্য কোনটি?","options":[{"key":"A","text":"ভীরু ও নমনীয়"},{"key":"B","text":"স্পষ্টবাদী, সাহসী ও নির্ভীক"},{"key":"C","text":"কৃপণ ও অলস"},{"key":"D","text":"রাগী ও অসৎ"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-22', 'atmacharit-mcq-26',
  $${"stem":"রামজয় তর্কভূষণ কত বছর বয়সে দেহত্যাগ করেন?","options":[{"key":"A","text":"৬৬"},{"key":"B","text":"৭০"},{"key":"C","text":"৭৬"},{"key":"D","text":"৮০"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-23', 'atmacharit-mcq-27',
  $${"stem":"রামজয় তর্কভূষণ কী রোগে মারা যান?","options":[{"key":"A","text":"জ্বর"},{"key":"B","text":"অতিসার"},{"key":"C","text":"বসন্ত"},{"key":"D","text":"কুষ্ঠ"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-24', 'atmacharit-mcq-28',
  $${"stem":"পিতামহের মৃত্যুর পর ঈশ্বরচন্দ্রকে নিয়ে পিতা কোথায় আশ্রয় নেন?","options":[{"key":"A","text":"রাধামোহন বিদ্যাভূষণের বাড়িতে"},{"key":"B","text":"ভাগবতচরণ সিংহের আবাসে"},{"key":"C","text":"কালীকান্ত চট্টোপাধ্যায়ের বাড়িতে"},{"key":"D","text":"রামসুন্দর মল্লিকের বাড়িতে"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-25', 'atmacharit-mcq-29',
  $${"stem":"ঈশ্বরচন্দ্রকে সবচেয়ে বেশি স্নেহ করতেন কে?","options":[{"key":"A","text":"জ্যেষ্ঠা ভগিনী"},{"key":"B","text":"কনিষ্ঠা ভগিনী রাইমণি"},{"key":"C","text":"মাতুল রাধামোহন"},{"key":"D","text":"জগদ্দুর্লভ সিংহ"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-26', 'atmacharit-mcq-30',
  $${"stem":"রাইমণির একমাত্র পুত্রের নাম কী?","options":[{"key":"A","text":"জগদ্দুর্লভ সিংহ"},{"key":"B","text":"গোপালচন্দ্র ঘোষ"},{"key":"C","text":"মধুসূদন বাচস্পতি"},{"key":"D","text":"রামসুন্দর মল্লিক"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-27', 'atmacharit-mcq-31',
  $${"stem":"পিতৃদেব ঠাকুরদাস কোথায় মাসিক দশ টাকা বেতনে নিযুক্ত হয়েছিলেন?","options":[{"key":"A","text":"বড়বাজারে"},{"key":"B","text":"জোড়াসাঁকোয় রামসুন্দর মল্লিকের নিকট"},{"key":"C","text":"সিদ্ধেশ্বরীতলায়"},{"key":"D","text":"হেয়ার স্কুলে"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-28', 'atmacharit-mcq-32',
  $${"stem":"মাইলস্টোন কী নির্দেশ করে?","options":[{"key":"A","text":"রাস্তার দিক"},{"key":"B","text":"দূরত্ব"},{"key":"C","text":"সময়"},{"key":"D","text":"উচ্চতা"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-29', 'atmacharit-mcq-33',
  $${"stem":"পাঠ্যাংশ অনুযায়ী 'মাইল' শব্দের অর্থ কী বলা হয়েছে?","options":[{"key":"A","text":"দুই ক্রোশ"},{"key":"B","text":"এক ক্রোশ"},{"key":"C","text":"আধ ক্রোশ"},{"key":"D","text":"সিকি ক্রোশ"}],"correct_option":"C"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'mcq', 1, 'অনুশীলনী MCQ-30', 'atmacharit-mcq-34',
  $${"stem":"মাইলস্টোনের ঘটনার পর ঈশ্বরচন্দ্রকে কোন স্কুলে ভর্তির পরামর্শ দেওয়া হয়েছিল?","options":[{"key":"A","text":"সংস্কৃত কলেজ"},{"key":"B","text":"হেয়ার সাহেবের স্কুল"},{"key":"C","text":"মেট্রোপলিটন কলেজ"},{"key":"D","text":"ফোর্ট উইলিয়াম কলেজ"}],"correct_option":"B"}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'cq', 10, 'পাঠ্যবই সৃজনশীল', 'atmacharit-cq-01',
  $${"uddipok":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"বাকাল গ্রামের মন্দিরের পুরোহিত দ্বিজেন্দ্রনাথ তার পুত্র দিনেশকে টোল অর্থাৎ সংস্কৃত পাঠশালায় পড়ানোর সিদ্ধান্ত নিলেন। গ্রামবাসী তাকে বোঝালেন, এ শিক্ষা শেষে সব ধরনের চাকরি পাওয়া সম্ভব নয়। সাধারণ শিক্ষার পাঠ গ্রহণ করলে শিক্ষার দিগন্ত ও জ্ঞানার্জনের পথ বিস্তৃত হয় এবং চাকরির ক্ষেত্র সম্প্রসারিত হয়। দ্বিজেন্দ্রনাথ শেষ পর্যন্ত দিনেশকে সাধারণ শিক্ষা প্রতিষ্ঠান বাকাল প্রাথমিক বিদ্যালয়ে ভর্তি করলেন।"}]}]},"sub_questions":[{"level":"জ্ঞানমূলক","text":"বড় বাজারের চকে মল্লিক মহাশয়ের কিসের দোকান ছিল?","marks":1,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"বড় বাজারের চকে মল্লিক মহাশয়ের লোহা ও পিতলের নানাবিধ বিলাতি জিনিসের দোকান ছিল।"}]}]}},{"level":"অনুধাবনমূলক","text":"ঈশ্বরচন্দ্রকে কেন ইংরেজি পড়ানোর পরামর্শ দেওয়া হয়েছিল তা ব্যাখ্যা করো।","marks":2,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"'আত্মচরিত' রচনায় দেখা যায়, কলকাতা যাওয়ার পথে মাইলস্টোনের অঙ্ক নিজে নিজে চিনে ফেলার ঘটনায় বালক ঈশ্বরচন্দ্রের অসাধারণ সহজাত মেধার পরিচয় পাওয়া যায়। এই ঘটনা দেখে পিতৃদেবের পরামর্শদাতা আত্মীয়স্বজন একবাক্যে স্থির করেন যে, তাঁকে রীতিমতো ইংরেজি পড়ানো উচিত। কারণ তাঁদের ধারণা ছিল, ইংরেজি ভালো জানা থাকলে সওদাগর সাহেবদের হৌসে অনায়াসে কর্ম পাওয়া যায়, এবং হিন্দু কলেজে পড়লে ইংরেজির চূড়ান্ত শিক্ষা অর্জন করে বড় বড় দোকানে বা সাহেবি কাজে সহজে প্রতিষ্ঠিত হওয়া সম্ভব। এই বাস্তব উপযোগিতার কথা বিবেচনা করেই ঈশ্বরচন্দ্রকে ইংরেজি বিদ্যালয়ে পড়ানোর পরামর্শ দেওয়া হয়েছিল।"}]}]}},{"level":"প্রয়োগ","text":"দ্বিজেন্দ্রনাথের সঙ্গে ঈশ্বরচন্দ্রের পিতার সাদৃশ্য আছে কি? — ব্যাখ্যা করো।","marks":3,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"হ্যাঁ, দ্বিজেন্দ্রনাথের সঙ্গে ঈশ্বরচন্দ্রের পিতা ঠাকুরদাসের যথেষ্ট সাদৃশ্য লক্ষ করা যায়। উদ্দীপকে দেখা যায়, পুরোহিত দ্বিজেন্দ্রনাথ প্রথমে পুত্র দিনেশকে ঐতিহ্যগত সংস্কৃত টোলে পড়ানোর সিদ্ধান্ত নিলেও, গ্রামবাসীর বাস্তব যুক্তি ও উপদেশ শুনে শেষ পর্যন্ত তিনি দিনেশকে সাধারণ শিক্ষা প্রতিষ্ঠানে ভর্তি করেন, যাতে তার শিক্ষার দিগন্ত ও কর্মক্ষেত্র বিস্তৃত হয়। ঠিক অনুরূপভাবে, 'আত্মচরিত'-এ দেখা যায়, সংস্কৃতব্যবসায়ী পরিবারের সন্তান হওয়া সত্ত্বেও ঠাকুরদাস প্রথমে পুত্র ঈশ্বরচন্দ্রকে সংস্কৃত শিখিয়ে চতুষ্পাঠী স্থাপনের ইচ্ছা পোষণ করলেও, আত্মীয়স্বজন ও পরামর্শদাতাদের যুক্তিতে নিজের সিদ্ধান্ত পুনর্বিবেচনা করতে রাজি হন। উভয় ক্ষেত্রেই সন্তানের প্রকৃত ভবিষ্যতের কথা চিন্তা করে পিতা তাঁর ব্যক্তিগত ইচ্ছা শিথিল করে সমাজের বাস্তব পরামর্শ গ্রহণে সম্মত হয়েছেন — এদিক থেকেই দুজনের মধ্যে স্পষ্ট সাদৃশ্য বিদ্যমান।"}]}]}},{"level":"উচ্চতর দক্ষতা","text":"\\"দিনেশ ও ঈশ্বরচন্দ্র একই ধরনের সমস্যার সম্মুখীন হয়েছিলেন।\\"— 'আত্মচরিত' অবলম্বনে মূল্যায়ন করো।","marks":4,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"মূল্যায়ন করলে দেখা যায়, দিনেশ ও ঈশ্বরচন্দ্র উভয়েই তাদের শিক্ষাজীবনের শুরুতে একই ধরনের দ্বিধা-দ্বন্দ্বের সম্মুখীন হয়েছিলেন — ঐতিহ্যগত/ধর্মীয় শিক্ষা নাকি বাস্তবমুখী সাধারণ শিক্ষা, এই সিদ্ধান্তহীনতা। দ্বিজেন্দ্রনাথ প্রথমে দিনেশকে টোলে পড়াতে চাইলেও গ্রামবাসীর বাস্তব যুক্তিতে শেষমেশ সাধারণ শিক্ষা প্রতিষ্ঠানেই ভর্তি করান। তেমনি ঈশ্বরচন্দ্রের ক্ষেত্রেও পিতা ঠাকুরদাস সংস্কৃতব্যবসায়ী পারিবারিক ঐতিহ্য অনুযায়ী তাঁকে সংস্কৃত পড়ানোর ইচ্ছা পোষণ করলেও, আত্মীয়স্বজন ইংরেজি শিক্ষার বাস্তব উপযোগিতা তুলে ধরেন। পার্থক্য এটুকুই যে, ঈশ্বরচন্দ্রের বেলায় শেষ পর্যন্ত সিদ্ধান্ত স্থির হয় সংস্কৃত কলেজে পড়ার পক্ষে, কারণ সেখানে বিদ্যাচর্চা ও চাকরি উভয় সুযোগই থাকে। সামগ্রিক বিচারে, দুটি ঘটনাতেই সন্তানের শিক্ষা নির্বাচনে পারিবারিক ঐতিহ্য, সমাজের মতামত ও বাস্তবিক কর্মসংস্থানের চিন্তা গুরুত্বপূর্ণ ভূমিকা পালন করে। সুতরাং মন্তব্যটি যথার্থ।"}]}]}}]}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'cq', 10, 'নতুন সৃজনশীল-১', 'atmacharit-cq-02',
  $${"uddipok":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"রহিমার মা কাজের সন্ধানে শহরে আসা এক ক্ষুধার্ত অপরিচিত কিশোরকে ঘরে ডেকে নিজের হাতে ভাত বেড়ে দিলেন। বিনিময়ে কিছু নিতে চাইলেন না, শুধু বললেন, \\"বাবা, না খেয়ে থাকিস না, দরকার হলে আবার আসিস।\\" কিশোরটি সারাজীবন এই ঘটনা মনে রেখেছিল এবং নারীজাতির প্রতি গভীর শ্রদ্ধাশীল হয়ে ওঠে।"}]}]},"sub_questions":[{"level":"জ্ঞানমূলক","text":"ঈশ্বরচন্দ্র বিদ্যাসাগরের জন্মস্থান কোথায়?","marks":1,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"পশ্চিমবঙ্গের মেদিনীপুর জেলার বীরসিংহ গ্রামে।"}]}]}},{"level":"অনুধাবনমূলক","text":"\\"বাবা, জল খাও না, একটু অপেক্ষা কর\\" — উক্তিটি কার, এবং কেন বলা হয়েছিল? ব্যাখ্যা করো।","marks":2,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"উক্তিটি মুড়িওয়ালী বিধবা রমণীর। ঠাকুরদাস ক্ষুধার্ত অবস্থায় শুধু জল চাইলে তিনি বুঝতে পারেন তিনি না খেয়ে আছেন, তাই জল না খাইয়ে আগে দই-মুড়ি দিয়ে পেট ভরে খাওয়াতে চান বলেই এই কথা বলেছিলেন।"}]}]}},{"level":"প্রয়োগ","text":"উদ্দীপকের রহিমার মায়ের সঙ্গে 'আত্মচরিত' রচনার কোন চরিত্রের সাদৃশ্য রয়েছে? ব্যাখ্যা করো।","marks":3,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"রহিমার মায়ের সঙ্গে আত্মচরিতের মুড়িওয়ালী বিধবা রমণীর সাদৃশ্য আছে। দুজনেই অপরিচিত ক্ষুধার্ত বালকের প্রতি নিঃস্বার্থ মমতা দেখিয়েছেন, বিনিময়ে কিছু চাননি, এবং আন্তরিকতার সঙ্গে আপন সন্তানের মতো আচরণ করেছেন। এই সাদৃশ্য প্রমাণ করে, মানবিক করুণা ও মমত্ববোধ সময় ও পরিবেশ নির্বিশেষে একই রূপে প্রকাশ পায়।"}]}]}},{"level":"উচ্চতর দক্ষতা","text":"\\"একটি ক্ষুদ্র মানবিক ঘটনাও একজন মানুষের সারাজীবনের মূল্যবোধ গঠন করতে পারে\\" — উদ্দীপক ও 'আত্মচরিত' অবলম্বনে মূল্যায়ন করো।","marks":4,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"ছোট একটি মানবিক আচরণ কীভাবে গভীর প্রভাব ফেলতে পারে তা উভয় ঘটনাতেই স্পষ্ট। মুড়িওয়ালীর নিঃস্বার্থ আচরণে বালক ঈশ্বরচন্দ্রের মনে নারীজাতির প্রতি যে শ্রদ্ধাবোধ জন্ম নেয়, তা সারাজীবন তাঁর মধ্যে বিদ্যমান ছিল এবং পরবর্তীতে নারীশিক্ষা ও বিধবাবিবাহ প্রবর্তনে তাঁকে অনুপ্রাণিত করে। তেমনি উদ্দীপকের কিশোরও রহিমার মায়ের আচরণে সারাজীবনের জন্য প্রভাবিত হয়। সুতরাং উক্তিটি যথার্থ।"}]}]}}]}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'cq', 10, 'নতুন সৃজনশীল-২', 'atmacharit-cq-03',
  $${"uddipok":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"শিক্ষক জনাব করিম কখনো মিথ্যা বলতেন না, কাউকে ভয় পেতেন না এবং অন্যায়ের সঙ্গে আপস করতেন না। ছাত্ররা তাঁকে যেমন সমীহ করত, তেমনি শ্রদ্ধাও করত।"}]}]},"sub_questions":[{"level":"জ্ঞানমূলক","text":"রামজয় তর্কভূষণ কত বছর বয়সে মারা যান?","marks":1,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"ছিয়াত্তর বৎসর বয়সে।"}]}]}},{"level":"অনুধাবনমূলক","text":"\\"তিনি যেমন স্পষ্টবাদী, তেমনই যথার্থবাদী ছিলেন\\" — কথাটি ব্যাখ্যা করো।","marks":2,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"রামজয় তর্কভূষণ কখনো ভয়ে বা অনুরোধে মিথ্যা বলতেন না এবং যা সত্য মনে করতেন তা স্পষ্টভাবে বলতেন, তাই লেখক তাঁকে স্পষ্টবাদী ও যথার্থবাদী বলে বর্ণনা করেছেন।"}]}]}},{"level":"প্রয়োগ","text":"উদ্দীপকের করিম সাহেবের সঙ্গে 'আত্মচরিত'-এর কোন চরিত্রের তুলনা করা যায়? ব্যাখ্যা করো।","marks":3,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"করিম সাহেবের সঙ্গে রামজয় তর্কভূষণের তুলনা করা যায়। দুজনেই স্পষ্টবাদী, নির্ভীক এবং ন্যায়ের প্রতি আপসহীন — কাউকে ভয় না পেয়ে সত্য কথা বলার সাহস রাখেন, এবং এই গুণের জন্যই উভয়ে ছাত্র বা পরিচিতজনদের কাছে সম্মান অর্জন করেছেন।"}]}]}},{"level":"উচ্চতর দক্ষতা","text":"\\"সাহস ও সততাই প্রকৃত ব্যক্তিত্বের পরিচায়ক\\" — উদ্দীপক ও 'আত্মচরিত' অবলম্বনে মূল্যায়ন করো।","marks":4,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"রামজয় তর্কভূষণ দস্যুভয়ংকর পথেও নির্ভয়ে চলাফেরা করতেন এবং কখনো অন্যায়ের কাছে মাথা নত করেননি। তেমনি উদ্দীপকের করিম সাহেবও সততা ও সাহসের কারণে ছাত্রদের শ্রদ্ধা অর্জন করেছেন। সুতরাং সাহস ও সততাই প্রকৃত ব্যক্তিত্বের মূল ভিত্তি — মন্তব্যটি যথার্থ।"}]}]}}]}$$::jsonb
) on conflict (slug) do nothing;

insert into questions (level_id, board_id, subject_id, chapter_id, question_type, marks, original_number, slug, payload) values (
  '00000000-0000-0000-0000-000000000002', null, 'b0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000101', 'cq', 10, 'নতুন সৃজনশীল-৩', 'atmacharit-cq-04',
  $${"uddipok":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"ছোট্ট আরিফ কখনো স্কুলে না গিয়েও বাসের নম্বর প্লেট দেখে দেখে নিজে নিজেই ইংরেজি সংখ্যা চিনে ফেলেছিল। এটি দেখে তার বাবা-মা অবাক হয়ে তাকে ভালো স্কুলে ভর্তি করার সিদ্ধান্ত নেন।"}]}]},"sub_questions":[{"level":"জ্ঞানমূলক","text":"মাইলস্টোনে সর্বোচ্চ কত অঙ্ক খোদাই করা ছিল?","marks":1,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"উনিশ (১৯) পর্যন্ত।"}]}]}},{"level":"অনুধাবনমূলক","text":"ঈশ্বরচন্দ্র কীভাবে ইংরেজি অঙ্ক চিনতে শিখলেন? ব্যাখ্যা করো।","marks":2,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"পিতার সঙ্গে কলকাতা যাওয়ার পথে মাইলস্টোনের গায়ে খোদাই অঙ্ক দেখে ও পিতার সংক্ষিপ্ত ব্যাখ্যা শুনে ঈশ্বরচন্দ্র নিজে নিজেই অঙ্ক মিলিয়ে মিলিয়ে একদিনের মধ্যেই সব অঙ্ক চিনে ফেলেন।"}]}]}},{"level":"প্রয়োগ","text":"উদ্দীপকের আরিফের সঙ্গে 'আত্মচরিত'-এর বালক ঈশ্বরচন্দ্রের সাদৃশ্য কোথায়? ব্যাখ্যা করো।","marks":3,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"আরিফ ও বালক ঈশ্বরচন্দ্র উভয়েই প্রথাগত শিক্ষা ছাড়াই নিজের পর্যবেক্ষণ ও কৌতূহল থেকে সংখ্যা চিনতে শিখেছে। উভয়ের ক্ষেত্রেই দৈনন্দিন জীবনের সাধারণ বস্তু থেকে শেখার এই সহজাত ক্ষমতা তাদের ভবিষ্যৎ শিক্ষাগ্রহণের পথ নির্ধারণ করে দেয়।"}]}]}},{"level":"উচ্চতর দক্ষতা","text":"\\"সহজাত মেধা যথাযথ পরিবেশ পেলে আপনা থেকেই প্রকাশ পায়\\" — মন্তব্যটি মূল্যায়ন করো।","marks":4,"answer":{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"ঈশ্বরচন্দ্র কোনো প্রথাগত শিক্ষা ছাড়াই মাইলস্টোন দেখে অঙ্ক চিনে সবাইকে বিস্মিত করেন। তেমনি আরিফও বাসের নম্বরপ্লেট থেকে সংখ্যা চিনে সহজাত প্রতিভার পরিচয় দেয়। উভয় ক্ষেত্রেই উপযুক্ত পরিবেশ পেলে সহজাত মেধা আপনাআপনি প্রকাশ পায়। সুতরাং মন্তব্যটি যথার্থ।"}]}]}}]}$$::jsonb
) on conflict (slug) do nothing;

