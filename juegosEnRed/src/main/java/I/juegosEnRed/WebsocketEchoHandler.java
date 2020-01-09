package I.juegosEnRed;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;


@RestController
@RequestMapping("/ws")
public class WebsocketEchoHandler extends TextWebSocketHandler {
	
	
	WebSocketSession[] usuarios = new WebSocketSession[2];
	int registrados = 0;
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception{
		
		System.out.println("Message received: " + message.getPayload());
		
		//-------------------- REGISTRO DE JUGADORES EN EL SERVIDOR  -----------------------
		if(message.getPayload().equals("registrar")) {
			if(registrados == 0) {
				usuarios[0] = session;
				System.out.println("J1 conectado");
				session.sendMessage(new TextMessage("J1"));
				registrados++;
				
			}else if(registrados == 1) {
				
					usuarios[1] = session;
					session.sendMessage(new TextMessage("J2"));
					System.out.println("J2 conectado");
					registrados++;	
			}else {
				session.sendMessage(new TextMessage("Lo sentimos, el servidor no admite más jugadores"));
			}	
		}else {
		
			//---------------- ENVIO DEL RESTO DE MENSAJES -------------------------------
			if(session.getId() == usuarios[0].getId()) {
				usuarios[1].sendMessage(new TextMessage(message.getPayload()));
			}else if(session.getId() == usuarios[1].getId()) {
				usuarios[0].sendMessage(new TextMessage(message.getPayload()));
			}
			
		}
		
		
		
		
		
		
	
		
		
	}
}
