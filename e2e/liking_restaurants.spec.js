/* eslint-disable no-undef */
const assert = require('assert');

Feature('liking restaurants');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('liking a restaurant', async ({ I }) => {
    // memilih resto element pertama
    I.seeElement('a.resto-name');
    const firstResto = locate('a.resto-name').first();
    const titleFirstResto = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    // menyukai restaurant
    I.seeElement('#like-button');
    I.click('#like-button');

    // membuka halaman daftar restaurant favorite
    I.amOnPage('/#/favorite');
    I.seeElement('resto-item');

    // membandingkan judul yang disukai dengan judul yang ditampilkan
    const titleLikedResto = await I.grabTextFrom('.resto-name');
    assert.strictEqual(titleFirstResto, titleLikedResto);
});

Scenario('unliking a restaurant', ({ I }) => {
    // memilih salah satu restaurant
    I.seeElement('a.resto-name');
    I.click(locate('a.resto-name').first());

    // menyukai sebuah restaurant
    I.seeElement('#like-button');
    I.click('#like-button');

    // membuka halaman daftar restaurant favorite
    I.amOnPage('/#/favorite');
    I.seeElement('resto-item');

    // memilih salah satu restaurant favorite
    I.seeElement('a.resto-name');
    I.click(locate('a.resto-name').first());

    // batal menyukai sebuah restaurant
    I.seeElement('#like-button');
    I.click('#like-button');

    // membuka halaman daftar restaurant favorite
    I.amOnPage('/#/favorite');
    I.seeElement('#no-data');
});
