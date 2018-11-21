export const wrongCode = `   @Test
    public void testCase237() throws InterruptedException {

        dealer.cancelGame();
        System.out.println("Place bets");

        Bet[] bets = {new Bet(PLAYER, CHIP_3)};
        try {
            player.simplePlaceBets(bets);
        } catch (Exception ignored) {}
        Thread.sleep(5000);

        logger.info("Dealing initial cards");
        dealer.manualDealCard(SPADES_2,SPADES_4,SPADES_8,SPADES_9);
        dealer.waitForStartingCsMessage(true);

        String s = player.getBankerScore();

        assertTrue(player.isControlledSqueezeTimerVisible());
        assertTrue(player.getBalance().equals(50000));
        assertEquals(4, dealer.getCardsToBeBurnt(),"Cards count do not match");
        assertEquals(dealer.getStatus(), s);

        System.out.println(s);
        dealer.cancelGame(); //cancel for next test!
        player.waitForStatus(STATUS_GAME_CANCELLED);
        String status = player.getStatus();
    }`;