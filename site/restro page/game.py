import pygame
pygame.init()

disply=pygame.display.set_mode((1000,600))

def loop():
	bumped=False
	while not bumped:
		for event in pygame.event.get():
			if event.type==pygame.QUITL:
				bumped=True

		pygame.display.update()
loop()
pygame.quit()
quit()
 